export default function Footer() {
    return (
        <div className="flex justify-center items-center gap-2 py-5">
            &copy; {new Date().getFullYear()} BuzzCall. All rights reserved.
        </div>
    )
}