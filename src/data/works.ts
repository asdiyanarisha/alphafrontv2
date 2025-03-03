export const MyWorks = [
    {
        companyName: "PT Kampung Marketeer Berdaya (Komerce)",
        histories: [
            {
                period: "Jan 2024 - Present",
                role: "Senior Backend Engineer",
                descriptions: [
                    "Developed and designed a virtual debit card web-application (Komcards) to seamless online\n" +
                    "payments",
                    "Mentored and conducted code reviews of junior software engineers to ensure adherence to company\n" +
                    "quality standards.",
                    "Optimizing application scalability and reliability to enhance user satisfaction.",
                    "Initiated unit test in every application to minimize possibility of the bugs"
                ],
            },
            {
                period: "Dec 2022 - Dec 2023",
                role: "Backend Engineer",
                descriptions: [
                    "Migrating from laravel queue to rabbitmq for solving issue tracking shipping system not updated.",
                    "Optimized tracking shipment status with method pulling data from api shipping with hourly interval."
                ],
            }
        ],
        skills: ["Golang", "MySQL", "RabbitMQ", "Laravel", "MongoDB", "Elastic Search", "Redis", "PostgreSQL"],
    },
    {
        companyName: "Perveks",
        histories: [
            {
                period: "Feb 2023 - May 2023",
                role: "Freelance Backend Engineer",
                descriptions: [
                    "Take research to finding best method of ocr for excellent result when the model read the document.",
                    "Build application for read ship cargo documents with OCR method and Tesseract for extracting image " +
                    "to text",
                ]
            }
        ],
        skills: ["Golang", "PostgreSQL", "GCP", "Tesseract", "OCR", "Google Vertex Ai", "Google Cloud Vision"],
    },
    {
        companyName: "PT Atmatech Global Informatika",
        histories: [
            {
                period: "Sept 2018 - Nov 2022",
                role: "Data Engineer (Crawler Engineer)",
                descriptions: [
                    "Build a crawling application to get data content from social media (twitter, instagram, tiktok and " +
                    "youtube) and media news online to make analysis of issues or trends in social media and online news."
                ]
            }
        ],
        skills: ["Python", "Celery", "Flask", "RabbitMQ", "MongoDB"],
    },
    {
        companyName: "PT Ebdesk Teknologi",
        histories: [
            {
                period: "Jun 2016 - Aug 2018",
                role: "Software Engineer",
                descriptions: [
                    "Build tool to daily operational media monitoring application with python and make sure the " +
                    "application running well.",
                    "Installing and maintaining existing product application in client side."
                ]
            }
        ],
        skills: ["Python", "Solr", "NSQ", "Beanstalkd", "MySQL"],
    }
];