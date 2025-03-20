export default function Card({element, columns, height}){
    return(
        <div className={`card ${columns} ${height}`}>
                        <div class="info">
                            <p>{columns},{height}</p>
                            <div class="button-group">
                                <button class="button-icon"><svg width="16" height="16" viewBox="0 0 16 16"
                                        fill="#444A53" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8Z"
                                            fill="#8F99A9" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7 7.5C7 7.22386 7.22386 7 7.5 7H8C8.27614 7 8.5 7.22386 8.5 7.5V10.5C8.77614 10.5 9 10.7239 9 11C9 11.2761 8.77614 11.5 8.5 11.5H8C7.72386 11.5 7.5 11.2761 7.5 11V8C7.22386 8 7 7.77614 7 7.5Z"
                                            fill="#8F99A9" />
                                        <path
                                            d="M8 6C8.41421 6 8.75 5.66421 8.75 5.25C8.75 4.83579 8.41421 4.5 8 4.5C7.58579 4.5 7.25 4.83579 7.25 5.25C7.25 5.66421 7.58579 6 8 6Z"
                                            fill="#444A53" />
                                    </svg>
                                </button>
                                <button class="button-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 9C8.55229 9 9 8.55229 9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9Z"
                                            fill="#444A53" />
                                        <path
                                            d="M4 9C4.55228 9 5 8.55229 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55229 3.44772 9 4 9Z"
                                            fill="#444A53" />
                                        <path
                                            d="M12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9Z"
                                            fill="#444A53" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <p>COUNT 355,367 events in 8 / 85 categories

</p>
{element}
        </div>
    )
}