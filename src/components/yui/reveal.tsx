import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Component = Tag as any;
  return (
    <Component ref={ref} className={`fade-in-up ${visible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </Component>
  );
}