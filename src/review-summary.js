export function createReviewSummary({ repository, pullNumber, verdict }) {
  if (!repository?.trim()) {
    throw new Error("저장소 이름이 필요합니다.");
  }

  if (!Number.isInteger(pullNumber) || pullNumber < 1) {
    throw new Error("Pull Request 번호는 1 이상의 정수여야 합니다.");
  }

  const normalizedVerdict = verdict?.trim() || "판정 없음";

  return `[${repository}#${pullNumber}] ${normalizedVerdict}`;
}
