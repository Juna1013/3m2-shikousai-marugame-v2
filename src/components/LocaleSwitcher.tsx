"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  return (
    <div>
      <Link href={pathname.replace(/^\/(en|ja)/, "/en")}>English</Link> |{" "}
      <Link href={pathname.replace(/^\/(en|ja)/, "/ja")}>日本語</Link>
    </div>
  );
}
