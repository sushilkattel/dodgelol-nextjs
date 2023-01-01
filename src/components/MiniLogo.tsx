import { Image, ImageProps } from "@chakra-ui/react";
import styles from "./MiniLogo.module.css";

export const MiniLogo = (props: ImageProps) => (
  <Image src="/logo.png" alt="logo" draggable={"false"} {...props} className={styles.icon} />
);
export const MainLogo = (props: ImageProps) => (
  <Image
    src="/mainLogo.png"
    alt="logo"
    marginLeft={["3vw", "1vw"]}
    draggable={"false"}
    {...props}
    className={styles.icon}
  />
);
