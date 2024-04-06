import express from 'express';
import {envs} from "./config";
import {GitGubController} from "./presentation/github/controller";
import {GithubSha256Middleware} from "./presentation/middlewares/github-sha256.middleware";

(() => {
    main();
})();

function main() {
    const app = express();
    const controller = new GitGubController();
    app.use(express.json());
    app.use(GithubSha256Middleware.verifySignature)
    app.post('/api/github', controller.webhookHandler);
    app.listen(envs.PORT, () => {
        console.log(`Server is running on port ${envs.PORT}`);
    });
}