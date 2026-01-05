

type ContentTitleProps = {
    desc?: string;
}

export const Divider = ({ desc }: ContentTitleProps) => {
    return (
        <div className="divider">
                            <span></span>
                            <p>{desc}</p>
                            <span></span>
                        </div>
    )
}

