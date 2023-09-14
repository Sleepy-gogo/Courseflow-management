import { cn } from "../../utilities/utils";

function Container({ className, children }) {
  return (
    <div
      className={cn(
        "p-3 border-box mx-auto bg-slate-100 rounded-lg shadow-md mb-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
