export const getCurrentHour = (): string => {
    const now = new Date();
    const madridTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/Madrid" })
    );
    const hours = madridTime.getHours();
    const minutes = madridTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;
}