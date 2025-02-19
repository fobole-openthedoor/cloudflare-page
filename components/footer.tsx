import { Link } from "@heroui/link";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-default-400 py-3">
      基于 <Link href="https://fastlyedge.com" isExternal className="text-primary">FastlyEdge</Link> 和 CloudFlare 提供服务
    </footer>
  );
} 