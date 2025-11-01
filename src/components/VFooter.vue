<template>
    <div class="footer">
        <div class="container container--footer">
            <div class="footer__wrapper">
                <div class="logo">
                    <img
                        class="logo__img"
                        alt="Logo - Магазин"
                        src="../assets/images/logo.png"
                    />
                </div>
                <nav class="footer__nav">
                    <ul class="footer__nav-list">
                        <li class="footer__nav-item">
                            <a href="#" class="footer__nav-link">О компании</a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="#" class="footer__nav-link">Контакты</a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="#" class="footer__nav-link">Вакансии</a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="#" class="footer__nav-link">Статьи</a>
                        </li>
                        <li class="footer__nav-item">
                            <a href="#" class="footer__nav-link"
                                >Политика обработки персональных данных</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="footer__wrapper footer__wrapper--social">
                <ul class="footer__social">
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link">
                            <img
                                src="../assets/images/icons/inst-icon.svg"
                                alt="Instagram"
                                class="footer__social-img"
                            />
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link">
                            <img
                                src="../assets/images/icons/vkontakte-icon.svg"
                                alt="VK"
                                class="footer__social-img"
                            />
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link">
                            <img
                                src="../assets/images/icons/facebook-icon.svg"
                                alt="Facebook"
                                class="footer__social-img"
                            />
                        </a>
                    </li>
                    <li class="footer__social-item">
                        <a href="#" class="footer__social-link">
                            <img
                                src="../assets/images/icons/ok-icon.svg"
                                alt="Ok"
                                class="footer__social-img"
                            />
                        </a>
                    </li>
                </ul>
                <div class="footer__phone">
                    <a href="tel:88007773333" class="footer__phone-link">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="currentFill"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.0227362 3.12795C-0.209223 1.28205 1.37081 0 3.06772 0H6.65939C7.38432 0 8.00552 0.518436 8.1352 1.23167L8.74153 4.56653C8.92265 5.56268 8.66352 6.58845 8.03103 7.37906L7.30764 8.2833C7.17873 8.44444 7.16694 8.65809 7.26652 8.82047C7.73609 9.58616 8.58076 10.8797 9.34752 11.6464C10.1143 12.4132 11.4078 13.2579 12.1735 13.7274C12.3359 13.827 12.5495 13.8152 12.7107 13.6863L13.6149 12.9629C14.4055 12.3304 15.4313 12.0713 16.4274 12.2524L19.7623 12.8588C20.4755 12.9885 20.994 13.6096 20.994 14.3346V17.6816C20.994 19.5032 19.543 21.124 17.6093 20.813C14.2966 20.2803 9.56155 18.5768 5.62757 14.3402C1.80252 10.2209 0.385498 6.01475 0.0227362 3.12795ZM3.06772 1C1.80321 1 0.877656 1.91084 1.01493 3.00326C1.35323 5.69537 2.68662 9.70344 6.36036 13.6598C10.1098 17.6977 14.6229 19.3199 17.768 19.8257C18.9625 20.0178 19.994 19.0285 19.994 17.6816V14.3346C19.994 14.0929 19.8212 13.8859 19.5834 13.8426L16.2486 13.2363C15.537 13.1069 14.8043 13.292 14.2396 13.7438L13.3354 14.4672C12.8575 14.8495 12.1859 14.9081 11.6507 14.5799C10.8875 14.1119 9.50015 13.2133 8.64041 12.3536C7.78068 11.4938 6.88209 10.1064 6.41406 9.34326C6.08586 8.80809 6.1445 8.13644 6.52677 7.65861L7.25016 6.75437C7.70194 6.18964 7.88703 5.45695 7.75766 4.74541L7.15133 1.41056C7.1081 1.17281 6.90103 1 6.65939 1H3.06772Z"
                                fill="currentFill"
                            />
                        </svg>

                        8 800 777 33 33</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style>
.footer {
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: #f9f4e2;
}

.container--footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.footer__wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
}

.footer__nav-list {
    display: flex;
    gap: 40px;
}

.footer__nav-link {
    font-size: 12px;
    font-weight: 500;
    color: #414141;
    transition: color 0.3s ease;
}
.footer__nav-link:hover {
    color: #ff6633;
}
.footer__nav-link:disabled {
    color: #8f8f8f;
}

.footer__social {
    display: flex;
    align-items: center;
    gap: 16px;
}

.footer__phone-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #414141;
    font-weight: 500;
    transition: color 0.3s ease;
}
.footer__phone-link:hover {
    color: #ff6633;
}
.footer__phone-link:hover svg {
    fill: #ff6633;
}

/* ---------------@MEDIA---------- */

@media (max-width: 1220px) {
    .footer__nav-list {
        gap: 0 20px;
    }
    .footer__wrapper {
        gap: 20px;
    }
}

@media (max-width: 1110px) {
    .footer {
        position: relative;
        padding-top: 32px;
        padding-bottom: 32px;
    }
    .footer__wrapper--social {
        flex-direction: column-reverse;
        gap: 8px;
    }
}
@media (max-width: 962px) {
    .footer__wrapper {
        gap: 0 40px;
        align-items: baseline;
    }
    .footer__nav-list {
        max-width: 360px;
        flex-wrap: wrap;
    }
    .footer__wrapper--social {
        gap: 8px;
    }
    .footer__nav-item:nth-child(3) {
        margin-right: 100px;
    }
}
@media (max-width: 760px) {
    .footer {
        padding: 32px 16px 72px;
    }
    .container--footer {
        flex-direction: column;
        align-items: baseline;
    }
    .footer__wrapper {
        flex-direction: column;
        gap: 24px;
    }
    .footer__nav-list {
        gap: 16px;
    }
    .footer__nav-item {
        font-size: 10px;
    }
    .footer__nav-item:nth-child(3) {
        margin-right: 0;
    }
    .footer__phone {
        position: absolute;
        top: 42px;
        right: 32px;
    }
}
</style>
