import Image from "next/image";

export function XiaohongshuIcon(props) {
  return (
    <Image
      src="/icons/xiaohongshu.png" // path relative to public folder
      alt="Xiaohongshu"
      width={20}
      height={20}
      {...props}
    />
  );
}
