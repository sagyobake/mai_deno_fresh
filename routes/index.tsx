import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";


export default function Home() {
    const count = useSignal(6); //引数nをここで指定する
    return (
        <body>
            <header>
                <h1>Mai</h1>
            </header>

            <main>
                <Counter count={count} /> {/*ハートとボタンの要素*/}
            </main>

            <footer>
                <ul>
                    <li>
                        <a href="https://x.com/4831338_">
                            <img src='./x-logo.png'></img>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/42251935maimai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <img src='./instagram-logo.png'></img>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/boc_mai1024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <img src='./instagram-logo.png'></img>
                        </a>
                    </li>
                </ul>
            </footer>
        </body>

    );
}
