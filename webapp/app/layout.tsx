import {ReactNode} from "react";
import "@/assets/styles/global.css";

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <html>
            <body dir='rtl'>
                {children}
            </body>
        </html>
    )
}

export default Layout;