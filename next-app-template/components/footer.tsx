import NextLink from "next/link"
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
  } from "@nextui-org/navbar";
  import { Button } from "@nextui-org/button";
  import { Link } from "@nextui-org/link";
  import { Input } from "@nextui-org/input";
  import { siteConfig } from "@/config/site";
  import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
  } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">yhcelebi</h2>
            <p className="mb-4">Exploring ideas, sharing insights, and fostering community through the written word.</p>
            <div className="flex space-x-4">
                <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                <TwitterIcon className="text-default-500" />
                </Link>
                <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                <DiscordIcon className="text-default-500" />
                </Link>
                <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                <GithubIcon className="text-default-500" />
                </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">Technology</Link></li>
              <li><Link href="#" className="hover:text-primary">Lifestyle</Link></li>
              <li><Link href="#" className="hover:text-primary">Travel</Link></li>
              <li><Link href="#" className="hover:text-primary">Food</Link></li>
              <li><Link href="#" className="hover:text-primary">Health</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary">RSS Feed</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest posts. Subscribe to our newsletter.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} yhcelebi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}