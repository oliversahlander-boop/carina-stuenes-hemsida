const sessionTimeoutMs = 30 * 60 * 1000;

type StoredSession = { id: string; lastActivity: number };

function createId() {
  return crypto.randomUUID();
}

export function getAnalyticsContext() {
  let visitorId = localStorage.getItem("analytics_visitor_id");
  if (!visitorId) {
    visitorId = createId();
    localStorage.setItem("analytics_visitor_id", visitorId);
  }

  const now = Date.now();
  let session: StoredSession | null = null;
  try {
    session = JSON.parse(localStorage.getItem("analytics_session") || "null") as StoredSession | null;
  } catch {
    session = null;
  }

  if (!session || now - session.lastActivity > sessionTimeoutMs) {
    session = { id: createId(), lastActivity: now };
  } else {
    session.lastActivity = now;
  }
  localStorage.setItem("analytics_session", JSON.stringify(session));

  let referrer = localStorage.getItem("analytics_referrer");
  if (referrer === null) {
    try {
      referrer = document.referrer ? new URL(document.referrer).hostname : "Direkt";
    } catch {
      referrer = "Okänd";
    }
    localStorage.setItem("analytics_referrer", referrer);
  }

  return { visitorId, sessionId: session.id, referrer };
}
