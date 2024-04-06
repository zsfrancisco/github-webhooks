import {envs} from "../../config";

export class DiscordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    async notify(message: string) {
        const body = {
            content: message,
            // embeds: [
            //     {
            //         image: {
            //             url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXV2N3VyNjdhaGVja2dsMnllcG81dW5vd2FsZXExNGVsYW00c2psNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif'
            //         }
            //     }
            // ],
        };

        const response = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log(`Error sending message to Discord: ${response.statusText}`);
            return false;
        }

        return true;
    }
}