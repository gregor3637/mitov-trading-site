import { useEffect, useState } from "react"

export default function (doReset) {
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        if (doReset && isEditing) {
            setIsEditing(false)
        }
    }, [doReset, isEditing])

    return [isEditing, setIsEditing]
}
