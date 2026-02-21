export interface MailFrom {
    domain: string;
    mailbox: string;
    displayName: string;
    status: 'active' | 'inactive',
    dnsCheck: boolean,
    dns: {
        mx: string,
        spf: string,
        dkim: string,
        dmarc: string,
        txt: string
    }
    restrictedTo: string[];
}
