const heartFunc = () => { // nはハートの模様を変えるのに用いる引数
    const array = [];

    const e = Math.E;

    for (let x = -e; x <= e; x += 0.0001) {
        const y =
            Math.sin(e ** 11 * x) *
            Math.sqrt((e ** 2 - x ** 2) / 1.8) +
            Math.log(Math.abs(x) + 0.7);

        array.push(
            <div
                class="dot"
                style={{
                    left: `${50 + (12 * x)}dvmin`,
                    top: `${48 + (-1 * (12 * y))}dvmin`,
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
                <h1>Mai</h1>
            </header>

            <main>
                {heartFunc()}
            </main>

            <footer>
                <address>
                    <ul>
                        <li>
                            <a href="https://x.com/4831338_">
                                <img src='./x-logo.png'></img>
                                仕事用
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/42251935maimai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <img src='./instagram-logo.png'></img>
                                仕事用
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/boc_mai1024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <img src='./instagram-logo.png'></img>
                                BUMP用
                            </a>
                        </li>
                    </ul>
                </address>
            </footer>

        </body>

    );
}
