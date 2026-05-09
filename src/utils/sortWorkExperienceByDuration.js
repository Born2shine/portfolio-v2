const MONTH_MAP = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

/** Parses "March 2021" style strings to UTC ms at month start. */
function parseMonthYear(str) {
  if (!str || typeof str !== "string") return null;
  const normalized = str.trim().replace(/\s+/g, " ");
  const match = normalized.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTH_MAP[match[1].toLowerCase()];
  if (month === undefined) return null;
  const year = parseInt(match[2], 10);
  return Date.UTC(year, month, 1);
}

function durationSortKey(duration) {
  if (!duration || typeof duration !== "string") {
    return { end: 0, start: 0 };
  }
  const parts = duration
    .split(/\s*[—–-]\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length < 2) {
    return { end: 0, start: 0 };
  }
  const start = parseMonthYear(parts[0]);
  const endRaw = parts[parts.length - 1];
  let end;
  if (/^present$/i.test(endRaw)) {
    end = Number.MAX_SAFE_INTEGER;
  } else {
    end = parseMonthYear(endRaw);
  }
  return {
    end: end ?? 0,
    start: start ?? 0,
  };
}

/**
 * Most recent roles first: by end date (Present wins), then by start date.
 */
export function sortWorkExperienceByDuration(items) {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const ka = durationSortKey(a.duration);
    const kb = durationSortKey(b.duration);
    if (kb.end !== ka.end) return kb.end - ka.end;
    return kb.start - ka.start;
  });
}
