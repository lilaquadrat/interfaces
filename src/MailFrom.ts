export interface MailFrom {
    domain: string;
    mailbox: string;
    displayName: string;
    status: 'active' | 'inactive',
    dnsCheck: boolean,
    dns: {
        serverIp: string
        dkim: string
        txt: string
    }
    restrictedTo: string[];
}
