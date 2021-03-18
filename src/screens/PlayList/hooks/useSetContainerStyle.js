import { useMemo } from 'react'
export const useSetContainerStyle = () => {
    const containerStyle = useMemo(
        () => ({
            backgroundColor: 'white',
            padding: 0,
        }),
        [],
    )
    return {
        containerStyle,
    }
}