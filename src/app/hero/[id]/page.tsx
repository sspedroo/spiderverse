
interface IProps {
    params: {
        id: string;
    }
}

export default function Hero({ params: { id } }: IProps) {
    return <h1>Spider-man</h1>
}