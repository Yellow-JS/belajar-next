import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000);
    }, []);
    return (
        <div>
            <h1 className="title404">Oppss...!</h1>
            <h1 className="title404">Halaman yang anda cari tidak ditemukan</h1>
        </div>

    )
}