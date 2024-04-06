import {GitHubIssuePayload, GitHubStarPayload} from "../../interfaces";

export class GithubService {
    onStar(payload: GitHubStarPayload): string {
        const {action, sender, repository, starred_at} = payload;
        return `User ${sender.login} ${action} star on the repository ${repository.full_name} at ${starred_at}`;
    }

    onIssue(payload: GitHubIssuePayload): string {
        const {action, issue} = payload;
        if (action === 'opened') {
            return `An issue was opened with this title: ${issue.title}`;
        }
        if (action === 'closed') {
            return `An issue was closed with this title: ${issue.title}`;
        }
        if (action === 'reopened') {
            return `An issue was reopened with this title: ${issue.title}`;
        }
        return `Unhandled action for the issue event ${action}`
    }
}