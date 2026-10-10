/* ============================================================
 * Courseware Studio — LMS-Embedded AI Learning Assistant On/Off Switch
 * ============================================================
 * This file controls whether the in-course LMS-Embedded AI Learning Assistant is active
 * for this package.
 *
 *     1 = ENABLED  (default)
 *     0 = DISABLED
 *
 * To turn the LMS-Embedded AI Learning Assistant OFF, change the 1 below to a 0.
 *
 * IMPORTANT — please read before editing:
 *
 *   • Edit this file BEFORE you import/upload the package to your
 *     LMS. Once a SCORM, xAPI, or cmi5 package has been imported,
 *     the LMS keeps its own copy of these files; editing the
 *     original .zip after import has no effect. To change the
 *     setting after import, edit here, re-zip, and re-import.
 *
 *   • Change ONLY the number on the last line. Do not rename,
 *     move, or delete any files in the ai-tutor/ folder — the
 *     package manifest expects all of them to be present, and a
 *     stricter LMS may reject the package if any are missing.
 *     Setting the value to 0 fully disables the Tutor while
 *     leaving every file in place.
 * ============================================================ */
window.__CS_AI_TUTOR_ENABLED__ = 0;
