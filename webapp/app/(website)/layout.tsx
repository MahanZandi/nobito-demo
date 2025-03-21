import {ReactNode} from "react";
import AppHeader from "@/components/website/AppHeader";

interface Props {
    children: ReactNode
}

const WebsiteLayout = ({children}: Props) => {
    return <>
        <AppHeader />
        {children}
    </>
}

export default WebsiteLayout