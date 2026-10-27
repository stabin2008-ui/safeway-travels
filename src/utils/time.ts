/**
 * Utility functions for time formatting
 */

/**
 * Converts a 24-hour time string (e.g. "15:30", "00:00", "10:00")
 * to a 12-hour formatted time string with AM/PM (e.g. "03:30 PM", "12:00 AM", "10:00 AM").
 *
 * Examples:
 * - 00:00 → 12:00 AM
 * - 10:00 → 10:00 AM
 * - 12:00 → 12:00 PM
 * - 15:30 → 03:30 PM
 * - 23:45 → 11:45 PM
 */
export function formatTimeTo12Hour(timeStr: string): string {
  if (!timeStr) return "";

  const trimmed = timeStr.trim();
  // If already in 12-hour format with AM/PM, return as is
  if (/AM|PM/i.test(trimmed)) {
    return trimmed;
  }

  const parts = trimmed.split(":");
  if (parts.length < 2) {
    return trimmed;
  }

  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);

  if (isNaN(hours) || isNaN(minutes)) {
    return trimmed;
  }

  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;

  const formattedHours = String(hours12).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${period}`;
}
