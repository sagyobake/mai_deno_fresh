import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
    count: Signal<number>;
}

const heartFunc = (n: number) => { // nはハートの模様を変えるのに用いる引数
    const array = [];

    const e = Math.E;

    for (let x = -e; x <= e; x += 0.0008) {
        const y =
            Math.sin(Math.exp(n) * x) *
            Math.sqrt((e ** 2 - x ** 2) / 2) +
            1.1 * Math.log1p(1.2 * Math.abs(x));

        array.push(
            <div
                class="dot"
                style={{
                    left: `${50 + (14 * x)}dvmin`,
                    top: `${48 + (-1 * (14 * y))}dvmin`,
                }}
            >
            </div>,
        );
    }

    console.log(array.length);

    return array;
};



export default function Counter(props: CounterProps) {
    return (
        <div>
            <div class='counter'>
                <Button onClick={() => props.count.value += 1}>+1</Button>
                <div> {props.count} </div>
                <Button onClick={() => props.count.value -= 1}>-1</Button>
            </div>

            {heartFunc(props.count.value)}
        </div>
    );
}
