const heartFunc = () => { // nはハートの模様を変えるのに用いる引数
    const array = [];

    const e = Math.E;

    for (let x = -e; x <= e; x += 0.0002) {
        const y =
            Math.sin(e ** 11 * x) *
            Math.sqrt((e ** 2 - x ** 2) / 1.8) +
            Math.log(Math.abs(x) + 0.7);

        array.push(
            <div
                class="dot"
                style={{
                    left: `${50 + (16 * x)}dvmin`,
                    top: `${80 + (-1 * (16 * y))}dvmin`,
                }}
            >
            </div>,
        );
    }

    console.log(array.length);

    return array;
};

export default function Home() {

    return (
        <body>
            <header>
                <h1>
                    Kindle執筆で新世界の神になる！
                </h1>
                <i>若者いじめて楽しいか?</i>
            </header>

            <main>
                {heartFunc()}
            </main>

            <footer>
            </footer>

        </body>

    );
}
