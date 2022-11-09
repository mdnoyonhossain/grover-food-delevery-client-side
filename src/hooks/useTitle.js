import { useEffect } from "react"

const useTitle = title => {
    useEffect( () =>{
        document.title = `${title} - Grover`;
    }, [title])
}

export default useTitle;