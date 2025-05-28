import avatar from '../../assets/avatar4.webp';
export default function AvatarIcon() {
  return (
    <div
      style={{
        backgroundColor: "turquoise",
        height: "50px",
        width: "50px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/images/avatar4.webp"
        alt={avatar}
        style={{
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
}
