import { Skeleton } from "@mui/material";

interface SkeletonListProps {
    length: number;
    variant?: "rounded" | "rectangular" | "circular";
    width?: number;
    heigth?: number;
}

const SkeletonList = ({ length, variant = "rounded", width = 200, heigth = 50 }:SkeletonListProps) => {

    return(
        <>
            {
                Array.from(
                    { length: length },
                    (value, index) => (
                        <Skeleton
                            key={index}
                            variant={variant}
                            width={width}
                            height={heigth}
                        />
                    )
                )
            }
        </>
    )
}

export default SkeletonList