// components
import ListBtns from "./ListBtns";

function Footer({ onCreateOpen, onUpdateOpen }) {
  const styleObj = {
    display: "Flex",
    justifyContent: "center",
    position: "fixed",
    bottom: "0",
    left: "0",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    backgroundColor: "#111827",
    color: "#ffffff",
    width: "100%",
  };
  return (
    <div style={styleObj}>
      <ListBtns
        onCreateOpen={onCreateOpen}
        onUpdateOpen={onUpdateOpen}
      />
    </div>
  );
}

export default Footer;
