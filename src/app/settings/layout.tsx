export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="bg-indigo-100">
        <div>{children}</div>
      </div>
  );
}