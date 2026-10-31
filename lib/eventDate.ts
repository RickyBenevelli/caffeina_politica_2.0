// Event dates in json/events.json are the local wall-clock time in Reggio
// Emilia ("2026-11-18T20:45:00"; older entries carry an offset, some of them
// wrong around DST changes). Everything here works on that wall-clock text and
// on the current time in Europe/Rome, so the result does not depend on the
// server time zone (UTC on Vercel).

const TIME_ZONE = "Europe/Rome";

const WALL_CLOCK = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/;

const dayFormatter = new Intl.DateTimeFormat("it-IT", {
    timeZone: "UTC",
    weekday: "long",
    day: "numeric",
    month: "long",
});

const todayFormatter = new Intl.DateTimeFormat("it-IT", {
    timeZone: TIME_ZONE,
    day: "numeric",
    month: "long",
});

// "sv-SE" formats as "2026-10-31 18:05", which compares like the JSON values.
const nowFormatter = new Intl.DateTimeFormat("sv-SE", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
});

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "2026-11-18T20:45:00+01:00" -> "2026-11-18T20:45" (date-only -> "T00:00"). */
export function wallClockKey(dateAndTime: string): string {
    const m = WALL_CLOCK.exec(dateAndTime);
    if (!m) return dateAndTime;
    const [, y, mo, d, hh = "00", mm = "00"] = m;
    return `${ y }-${ mo }-${ d }T${ hh }:${ mm }`;
}

/** Current time in Reggio Emilia, same shape as wallClockKey. */
export function nowKey(now: Date = new Date()): string {
    return nowFormatter.format(now).replace(" ", "T");
}

/** "Mercoledì 18 novembre, 20:45" (or just the day for date-only values). */
export function formatEventDate(dateAndTime: string): string {
    const m = WALL_CLOCK.exec(dateAndTime);
    if (!m) return dateAndTime;
    const [, y, mo, d, hh, mm] = m;
    const day = capitalize(dayFormatter.format(new Date(Date.UTC(Number(y), Number(mo) - 1, Number(d)))));
    return hh ? `${ day }, ${ hh }:${ mm }` : day;
}

/** "31 ottobre", today in Reggio Emilia. */
export function formatToday(now: Date = new Date()): string {
    return todayFormatter.format(now);
}
