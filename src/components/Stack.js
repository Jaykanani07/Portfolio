import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import "./Stack.css";

/* ================= CARD ROTATION WRAPPER ================= */

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [40, -40]);
  const rotateY = useTransform(x, [-100, 100], [-40, 40]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="card-rotate-disabled">
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragElastic={0.5}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

/* ================= MAIN STACK COMPONENT ================= */

export default function Stack({
  cards = [],
  sensitivity = 150,
  animationConfig = { stiffness: 260, damping: 20 },
  onCardClick
}) {
  // IMPORTANT: preserve order exactly as received
  const [stack, setStack] = useState(
    cards.map((content, index) => ({
      id: index,
      content
    }))
  );

  useEffect(() => {
    setStack(
      cards.map((content, index) => ({
        id: index,
        content
      }))
    );
  }, [cards]);

  /* Move top card to bottom */
  const sendToBack = (id) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card); // bottom of stack
      return newStack;
    });
  };

  return (
    <div className="stack-container">
      {stack.map((card, index) => {
        const isTop = index === stack.length - 1;

        return (
          <CardRotate
            key={card.id}
            sensitivity={sensitivity}
            onSendToBack={() => sendToBack(card.id)}
          >
            <motion.div
              className="card"
              onClick={() => {
                if (isTop && onCardClick) {
                  onCardClick(card.id);
                }
              }}
              animate={{
                rotateZ: (stack.length - index - 1) * 4,
                scale: 1 + index * 0.05 - stack.length * 0.05,
                transformOrigin: "90% 90%"
              }}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
