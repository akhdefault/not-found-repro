import ToggleParams from "./toggle-params";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ padding: 16 }}>
      {children}
      <br />
      <ToggleParams />
    </div>
  );
}
