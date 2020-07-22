export function getTouchySize() {
    return window?.getComputedStyle(document?.body).getPropertyValue("--touchy")?.trim();
}