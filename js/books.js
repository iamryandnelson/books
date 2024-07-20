const allGenre = ["19th Century", "Adult", "Adventure", "African American", "American", "American History", "Anthologies", "Anthropology", "Architecture", "Art", "Artificial Intelligence", "Asia", "Astrology", "Astronomy", "Autobiography", "Basketball", "BDSM", "Biography", "Biology", "Buddhism", "Bungee Jumping", "Business", "Brain", "China", "Christianity", "Cities", "Classics", "Climate Change", "Cookbooks", "Comedy", "Comics", "Communication", "Computers", "Computer Science", "Contemporary", "Counselling", "Crime", "Cultural", "Design", "Diets", "Dystopia", "Economics", "Education", "Entrepreneurship", "Environment", "Erotica", "Espionage", "Essays", "European History", "Fantasy", "Feminism", "Film", "Finance", "Fitness", "Food", "French Literature", "Games", "Gambling", "Germany", "Graphic Novels", "Health", "Hip Hop", "Historical Fiction", "History", "Horror", "How To", "Humor", "International Relations", "Iran", "Israel", "Jazz", "Journalism", "Judaism", "Law", "Leadership", "Literature", "Logic", "Management", "Mathematics", "Medicine", "Memoir", "Mental Health", "Military Fiction", "Money", "Mythology", "Mystery", "Nature", "Neuroscience", "Nonfiction", "Novels", "Paranormal", "Parenting", "Personal Development", "Personal Finance", "Philosophy", "Photography", "Physics", "Poetry", "Political Science", "Politics", "Polyamory", "Popular Science", "Poverty", "Presidents", "Productivity", "Programming", "Psychology", "Race", "Reference", "Relationships", "Religion", "Romance", "Russia", "Russian Literature", "Science", "Science Fiction", "Self Help", "Sexuality", "Short Stories", "Social Justice", "Sociology", "Spanish Literature", "Spirituality", "Sports", "Survival", "Taoism", "Technology", "Theatre", "Theology", "Thriller", "Travel", "True Crime", "Urban Planning", "War", "World History", "World War II", "Writing", "Young Adult"];

const booksData = [
    {
        isbn: 9780881030365,
        title: "1984",
        overview: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
        pages: "298",
        author: "George Orwell",
        release_date: "June 8, 1949",
        wikipedia: "Nineteen_Eighty-Four",
        poster: "img/1984.jpg",
        genre: ["Classics", "Fiction", "Science Fiction", "Dystopia", "Literature", "Politics", "Novels"]
    },
    {
        isbn: 9780345816023,
        title: "12 Rules for Life: An Antidote to Chaos",
        overview: "What does everyone in the modern world need to know? Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research. <p> Humorous, surprising, and informative, Dr. Peterson tells us why skateboarding boys and girls must be left alone, what terrible fate awaits those who criticize too easily, and why you should always pet a cat when you meet one on the street.<p> What does the nervous system of the lowly lobster have to tell us about standing up straight (with our shoulders back) and about success in life? Why did ancient Egyptians worship the capacity to pay careful attention as the highest of gods? What dreadful paths do people tread when they become resentful, arrogant, and vengeful? Dr. Peterson journeys broadly, discussing discipline, freedom, adventure, and responsibility, distilling the world's wisdom into 12 practical and profound rules for life. 12 Rules for Life shatters the modern commonplaces of science, faith, and human nature while transforming and ennobling the mind and spirit of its listeners.",
        pages: "409",
        author: "Jordan B. Peterson",
        release_date: "January 16, 2018",
        wikipedia: "12_Rules_for_Life",
        poster: "img/12_rules_for_life.jpg",
        genre: ["Nonfiction", "Psychology", "Self Help", "Philosophy", "Personal Development"]
    },
    {
        isbn: 9780553053401,
        title: "A Brief History of Time",
        overview: "A Brief History of Time, published in 1988, was a landmark volume in science writing and in world-wide acclaim and popularity, with more than 9 million copies in print globally. The original edition was on the cutting edge of what was then known about the origins and nature of the universe. But the ensuing years have seen extraordinary advances in the technology of observing both the micro- and the macrocosmic world—observations that have confirmed many of Hawking's theoretical predictions in the first edition of his book. Now a decade later, this edition updates the chapters throughout to document those advances, and also includes an entirely new chapter on Wormholes and Time Travel and a new introduction. It makes vividly clear why A Brief History of Time has transformed our view of the universe.",
        pages: "256",
        author: "Stephen W. Hawking",
        release_date: "September 1, 1988",
        wikipedia: "A_Brief_History_of_Time",
        poster: "img/a_brief_history_of_time.jpg",
        genre: ["Science", "Nonfiction", "Physics", "History", "Classics", "Philosophy", "Astronomy"]
    },
    {
        isbn: 9780374117269,
        title: "A Burglar's Guide to the City",
        overview: "Encompassing nearly 2,000 years of heists and tunnel jobs, break-ins and escapes, A Burglar's Guide to the City offers an unexpected blueprint to the criminal possibilities in the world all around us. You'll never see the city the same way again. <p> At the core of A Burglar's Guide to the City is an unexpected and thrilling insight: how any building transforms when seen through the eyes of someone hoping to break into it. Studying architecture the way a burglar would, Geoff Manaugh takes readers through walls, down elevator shafts, into panic rooms, up to the buried vaults of banks, and out across the rooftops of an unsuspecting city. <p> With the help of FBI Special Agents, reformed bank robbers, private security consultants, the L.A.P.D. Air Support Division, and architects past and present, the book dissects the built environment from both sides of the law. Whether picking padlocks or climbing the walls of high-rise apartments, finding gaps in a museum's surveillance routine or discussing home invasions in ancient Rome, A Burglar's Guide to the City has the tools, the tales, and the x-ray vision you need to see architecture as nothing more than an obstacle that can be outwitted and undercut. <p> Full of real-life heists-both spectacular and absurd-A Burglar's Guide to the City ensures readers will never enter a bank again without imagining how to loot the vault or walk down the street without planning the perfect getaway.",
        pages: "296",
        author: "Geoff Manaugh",
        release_date: "March 17, 2015",
        wikipedia: "BLDGBLOG",
        poster: "img/a_burglars_guide_to_the_city.jpg",
        genre: ["Nonfiction", "Architecture", "Crime", "History", "True Crime", "Cities", "Urban Planning"]
    },
    {
        isbn: 9780802130204,
        title: "A Confederacy of Dunces",
        overview: "Here is Ignatius Reilly: slob extraordinary, a mad Oliver Hardy, a fat Don Quixote, a perverse Thomas Aquinas rolled into one, who is in violent revolt against the entire modern age, lying in his flannel nightshirt in a back bedroom on Constantinople Street in New Orleans, who between gigantic seizures of flatulence and eructations is filling dozens of Big Chief tablets with invective. <p> His mother thinks he needs to go to work. He does, in a succession of jobs. Each job rapidly escalates into a lunatic adventure, a full-blown disaster; yet each has, like Don Quixote's, its own eerie logic. <p> His girlfriend, Myrna Minkoff of the Bronx, thinks he needs sex. <p> Ignatius is an intellectual, ideologue, deadbeat, goof-off, glutton, who should repel the reader with his gargantuan bloats, his thunderous contempt, and one-man war against everybody: Freud, homosexuals, heterosexuals, Protestants, and the assorted excesses of modern times.",
        pages: "394",
        author: "John Kennedy Toole",
        release_date: "May 1, 1980",
        wikipedia: "A_Confederacy_of_Dunces",
        poster: "img/a_confederacy_of_dunces.jpg",
        genre: ["Fiction", "Classics", "Humor", "Literature", "Comedy", "Novels", "American"]
    },
    {
        isbn: 9781641467612,
        title: "A Deeper Connection: How to Navigate Conflict and Grow Relationships",
        overview: "Conflict is something that many people shy away from or avoid altogether. Others are ready for battle at the first sign of conflict and immediately begin strategizing their approach to victory. No matter the approach, the outcome is usually the same--a disconnect. The real loss is often the relationships. A Deeper Connection is a guide to transforming how you think about conflict, yourself, and your approach to life. This book provides lasting transformation that can fix many of the problems you are encountering in your relationships. This book details a system for approaching and resolving conflict with ease. In this book, you will A path to emotional freedom A system to shed burdens and doubts about how you feel about your relationships The clarity to see how easy it is to experience conflict with a healthy outcome Imagine gaining insight into how you have historically viewed your world. By understanding the impact of your views, you will be on the path to improving your quality of life. By developing a new understanding of yourself, you will achieve a deeper intimacy in your relationships. This book is designed to enable you with the superpower to address any conflict you come across with confidence.",
        pages: "240",
        author: "John Sherrodd",
        release_date: "November 14, 2023",
        wikipedia: "",
        poster: "img/a_deeper_connection.jpg",
        genre: ["Nonfiction", "Relationships", "Self Help", "Psychology", "Personal Development", "Counselling"]
    },
    {
        isbn: 9780307887238,
        title: "A Force So Swift: Mao, Truman, and the Birth of Modern China, 1949",
        overview: "A gripping narrative of the Truman Administration's response to the fall of Nationalist China and the triumph of Mao Zedong's Communist forces in 1949--an extraordinary political revolution that continues to shape East Asian politics to this day. <p> In the opening months of 1949, U.S. President Harry S. Truman found himself faced with a looming diplomatic catastrophe--\"perhaps the greatest that this country has ever suffered,\" as the journalist Walter Lippmann put it. Throughout the spring and summer, Mao Zedong's Communist armies fanned out across mainland China, annihilating the rival troops of America's one-time ally Chiang Kai-shek and taking control of Beijing, Shanghai, and other major cities. As Truman and his aides--including his shrewd, ruthless secretary of state, Dean Acheson--scrambled to formulate a response, they were forced to contend not only with Mao, but also with unrelenting political enemies at home, in Congress and even within the administration. Over the course of this tumultuous year, Mao fashioned a new revolutionary government in Beijing, laying the foundation for the creation of modern China, while Chiang Kai-shek fled to the island sanctuary of Taiwan. These events transformed American foreign policy--leading, ultimately, to decades of friction with Communist China, a long-standing U.S. commitment to Taiwan, and the subsequent wars in Korea and Vietnam. <p> Drawing on Chinese and Russian sources, as well as recently declassified CIA documents, Kevin Peraino tells the story of this remarkable year through the eyes of the key players, including Mao Zedong, President Truman, Secretary of State Acheson, Minnesota congressman Walter Judd, and Madame Chiang Kai-shek, the influential first lady of the Republic of China. Truman and his administration struggled to navigate a disorienting new political landscape that was being reshaped daily by the emerging technology of television, the rising tensions of the Cold War with the Soviet Union, and growing fears of spying, infiltration, and Russia’s acquisition of the atomic bomb. <p> Today, the legacy of 1949 is more relevant than ever to the relationships between China, the United States, and the rest of the world, as Beijing asserts its claims in the South China Sea and tensions endure between Taiwan and the mainland. Yet at the heart of the book is a story for any season--a thoughtful and moving examination of the fierce determination of the human will.",
        pages: "384",
        author: "Kevin Peraino",
        release_date: "September 19, 2017",
        wikipedia: "Kevin_Peraino",
        poster: "img/a_force_so_swift.jpg",
        genre: ["History", "China", "Nonfiction", "Politics", "Asia", "American History", "World History"]
    },
    {
        isbn: 9781401601096,
        title: "A Gentleman Pens a Note: A Concise, Contemporary Guide to Personal Correspondence",
        overview: "A gentleman knows the importance of effectively expressing, in three or four sentences, his thanks for a gift or for a job interview, conveying his sympathy, or saying he is sorry. A Gentleman Pens a Note takes away the fear and discomfort a man experiences when faced with the task of writing a note by giving instruction and example in the proven style of the other GentleManners books. <p> A Gentleman Pens a Note contains examples of more than 40 different handwritten notes, as well as sentences to avoid. It also includes aphorisms and sidebars on subjects such as stationery, pens, and pre-printed notes. A gentleman does not expect a response when he has sent a thank-you note (or even a thank-you gift). A gentleman knows that words such as \"Thank You,\" \"Congratulations,\" or \"With sympathy,\" will mean a great deal more written in his own hand than when gold-embossed by a printer.",
        pages: "128",
        author: "John Bridges, Bryan Curtis",
        release_date: "January 1, 2003",
        wikipedia: "",
        poster: "img/a_gentleman_pens_a_note.jpg",
        genre: ["Nonfiction", "Self Help", "Reference", "Personal Development", "How To", "Cultural", "Business"]
    },
    {
        isbn: 9780451524935,
        title: "A Hero of Our Time",
        overview: "In its adventurous happenings, its abductions, duels, and sexual intrigues, A Hero of Our Time looks backward to the tales of Sir Walter Scott and Lord Byron, so beloved by Russian society in the 1820s and '30s. In the character of its protagonist, Pechorin, the archetypal Russian antihero, Lermontov's novel looks forward to the subsequent glories and passion of Russian literature that it helped, in great measure, to make possible.",
        pages: "185",
        author: "Mikhail Lermontov",
        release_date: "January 1, 1839",
        wikipedia: "A_Hero_of_Our_Time",
        poster: "img/a_hero_of_our_time.jpg",
        genre: ["Classics", "Fiction", "Russia", "Russian Literature", "Literature", "19th Century", "Novels"]
    },
    {
        isbn: 9780767908184,
        title: "A Short History of Nearly Everything",
        overview: "Bill Bryson describes himself as a reluctant traveller, but even when he stays safely at home he can't contain his curiosity about the world around him. \"A Short History of Nearly Everything\" is his quest to understand everything that has happened from the Big Bang to the rise of civilisation - how we got from there, being nothing at all, to here, being us. The ultimate eye-opening journey through time and space, revealing the world in a way most of us have never seen it before.",
        pages: "544",
        author: "Bill Bryson",
        release_date: "January 1, 2003",
        wikipedia: "A_Short_History_of_Nearly_Everything",
        poster: "img/a_short_history_of_nearly_everything.jpg",
        genre: ["Nonfiction", "Science", "History", "Humor", "Physics", "Popular Science"]
    },
    {
        isbn: 9780399562365,
        title: "A World in Disarray: American Foreign Policy and the Crisis of the Old Order",
        overview: "An examination of a world increasingly defined by disorder and a United States unable to shape the world in its image, from the president of the Council on Foreign Relations. <p> Things fall apart; the center cannot hold. The rules, policies, and institutions that have guided the world since World War II have largely run their course. Respect for sovereignty alone cannot uphold order in an age defined by global challenges from terrorism and the spread of nuclear weapons to climate change and cyberspace. Meanwhile, great power rivalry is returning. Weak states pose problems just as confounding as strong ones. The United States remains the world’s strongest country, but American foreign policy has at times made matters worse, both by what the U.S. has done and by what it has failed to do. The Middle East is in chaos, Asia is threatened by China’s rise and a reckless North Korea, and Europe, for decades the world’s most stable region, is now anything but. As Richard Haass explains, the election of Donald Trump and the unexpected vote for “Brexit” signals that many in modern democracies reject important aspects of globalization, including borders open to trade and immigrants. <p> In A World in Disarray, Haass argues for an updated global operating system—call it world order 2.0—that reflects the reality that power is widely distributed and that borders count for less. One critical element of this adjustment will be adopting a new approach to sovereignty, one that embraces its obligations and responsibilities as well as its rights and protections. Haass also details how the U.S. should act towards China and Russia, as well as in Asia, Europe, and the Middle East. He suggests, too, what the country should do to address its dysfunctional politics, mounting debt, and the lack of agreement on the nature of its relationship with the world. <p> A World in Disarray is a wise examination, one rich in history, of the current world, along with how we got here and what needs doing. Haass shows that the world cannot have stability or prosperity without the United States, but that the United States cannot be a force for global stability and prosperity without its politicians and citizens reaching a new understanding.",
        pages: "352",
        author: "Richard N. Haass",
        release_date: "January 10, 2017",
        wikipedia: "Richard_N._Haass",
        poster: "img/a_world_in_disarray.jpg",
        genre: ["Politics", "Nonfiction", "History", "International Relations", "Political Science", "Military Fiction", "Economics"]
    },
    {
        isbn: 9780312367541,
        title: "A Wrinkle in Time",
        overview: "It was a dark and stormy night. <p> Out of this wild night, a strange visitor comes to the Murry house and beckons Meg, her brother Charles Wallace, and their friend Calvin O'Keefe on a most dangerous and extraordinary adventure—one that will threaten their lives and our universe. <p> Winner of the 1963 Newbery Medal, A Wrinkle in Time is the first book in Madeleine L'Engle's classic Time Quintet.",
        pages: "247",
        author: "Madeleine L'Engle",
        release_date: "January 1, 1962",
        wikipedia: "A_Wrinkle_in_Time",
        poster: "img/a_wrinkle_in_time.jpg",
        genre: ["Fantasy", "Fiction", "Classics", "Young Adult", "Science Fiction"]
    },
    {
        isbn: 9781616084462,
        title: "Above All Else: A World Champion Skydiver's Story of Survival and What It Taught Him About Fear, Adversity, and Success",
        overview: "World famous competitive skydiver and coach Dan Brodsky-Chenfeld presents proven tools and techniques for success and explains how they can be used in everyday life. Dan survived a plane crash from which sixteen of the twenty-two people on board were killed. He was left critically injured and woke up from a six-week-long coma with a broken neck, broken skull, severe head trauma, a collapsed lung, and other serious internal injuries. Against all odds, Dan recovered and went on to become one of the greatest competitive skydiver in the world. <p> With the love and support of friends and family, Dan was able not only to resurrect his life but return to skydiving to achieve greater heights than he could have ever imagined. His techniques and methods for excelling are applicable to all people, no matter their goals. Dan uses his experiences to teach the lessons he's learned--as a competitor, coach, business owner, father, and husband--to help others achieve their dreams, overcome obstacles, and reach their peak performance. 30 color illustrations",
        pages: "326",
        author: "Dan Brodsky-Chenfeld",
        release_date: "September 15, 2011",
        wikipedia: "Dan_Brodsky-Chenfeld",
        poster: "img/above_all_else.jpg",
        genre: ["Nonfiction", "Self Help", "Biography", "Leadership", "Sports"]
    },
    {
        isbn: 9781557832771,
        title: "Acting in Film: An Actor's Take on Movie Making",
        overview: "A master actor who's appeared in an enormous number of films, starring with everyone from Nicholson to Kermit the Frog, Michael Caine is uniquely qualified to provide his view of making movies. This new revised and expanded edition features great photos throughout, with chapters on: Preparation, In Front of the Camera - Before You Shoot, The Take, Characters, Directors, On Being a Star, and much more. \"Remarkable material ... A treasure ... I'm not going to be looking at performances quite the same way ... FASCINATING!\" - Gene Siskel",
        pages: "186",
        author: "Michael Caine",
        release_date: "December 31, 1989",
        wikipedia: "Michael_Caine",
        poster: "img/acting_in_film.jpg",
        genre: ["Nonfiction", "Film", "Theatre", "Art", "Biography", "Writing"]
    },
    {
        isbn: 9780142437179,
        title: "Adventures of Huckleberry Finn",
        overview: "A nineteenth-century boy from a Mississippi River town recounts his adventures as he travels down the river with a runaway slave, encountering a family involved in a feud, two scoundrels pretending to be royalty, and Tom Sawyer's aunt who mistakes him for Tom.",
        pages: "327",
        author: "Mark Twain",
        release_date: "February 18, 1884",
        wikipedia: "Adventures_of_Huckleberry_Finn",
        poster: "img/adventures_of_huckleberry_finn.jpg",
        genre: ["Classics", "Fiction", "Historical Fiction", "Literature", "Young Adult", "Adventure"]
    },
    {
        isbn: 9781893007178,
        title: "Alcoholics Anonymous",
        overview: "It's more than a book. It's a way of life. Alcoholics Anonymous-The Big Book-has served as a lifeline to millions worldwide. First published in 1939, Alcoholics Anonymous sets forth cornerstone concepts of recovery from alcoholism and tells the stories of men and women who have overcome the disease. With publication of the second edition in 1955, the third edition in 1976, and now the fourth edition in 2001, the essential recovery text has remained unchanged while personal stories have been added to reflect the growing and diverse fellowship.",
        pages: "576",
        author: "Bill W.",
        release_date: "April 10, 1939",
        wikipedia: "The_Big_Book_(Alcoholics_Anonymous)",
        poster: "img/alcoholics_anonymous.jpg",
        genre: ["Self Help", "Nonfiction", "Psychology", "Reference", "Spirituality", "Health", "Mental Health"]
    },
    {
        isbn: 9780062413406,
        title: "Alibaba: The House That Jack Ma Built",
        overview: "An engrossing, insider’s account of how a teacher built one of the world’s most valuable companies—rivaling Walmart & Amazon—and forever reshaped the global economy. In just a decade and half Jack Ma, a man from modest beginnings who started out as an English teacher, founded and built Alibaba into one of the world’s largest companies, an e-commerce empire on which hundreds of millions of Chinese consumers depend. Alibaba’s $25 billion IPO in 2014 was the largest global IPO ever. A Rockefeller of his age who is courted by CEOs and Presidents around the world, Jack is an icon for China’s booming private sector and the gatekeeper to hundreds of millions of middle class consumers. Duncan Clark first met Jack in 1999 in the small apartment where Jack founded Alibaba. Granted unprecedented access to a wealth of new material including exclusive interviews, Clark draws on his own experience as an early advisor to Alibaba and two decades in China chronicling the Internet’s impact on the country to create an authoritative, compelling narrative account of Alibaba’s rise. How did Jack overcome his humble origins and early failures to achieve massive success with Alibaba? How did he outsmart rival entrepreneurs from China and Silicon Valley? Can Alibaba maintain its 80% market share? As it forges ahead into finance and entertainment, are there limits to Alibaba’s ambitions?  How does the Chinese government view its rise?  Will Alibaba expand further overseas, including in the U.S.? Clark tells Alibaba’s tale in the context of China’s momentous economic and social changes, illuminating an unlikely corporate titan as never before.",
        pages: "304",
        author: "Duncan Clark",
        release_date: "April 12, 2016",
        wikipedia: "Jack_Ma",
        poster: "img/alibaba.jpg",
        genre: ["Business", "Biography", "Nonfiction", "China", "Technology", "Entrepreneurship", "Leadership"]
    },
    {
        isbn: 9780385536714,
        title: "American Heiress: The Wild Saga of the Kidnapping, Crimes and Trial of Patty Hearst",
        overview: "On February 4, 1974, Patty Hearst, a sophomore in college and heiress to the Hearst Family fortune, was kidnapped by a ragtag group of self-styled revolutionaries calling itself the Symbonese Liberation Army. The weird turns that followed in this already sensational take are truly astonishing--the Hearst family tried to secure Patty's release by feeding the people of Oakland and San Francisco for free; bank security cameras captured \"Tania\" wielding a machine gun during a roberry; the LAPD engaged in the largest police shoot-out in American history; the first breaking news event was broadcast live on telelvision stations across the country; and then there was Patty's circuslike trial, filled with theatrical courtroom confrontations and a dramatic last-minute reversal, after which the term \"Stockholm syndrome\" entered the lexicon. <p> Ultimately, the saga highlighted a decade in which America seemed to be suffering a collective nervous breakdown.",
        pages: "384",
        author: "Jeffrey Toobin",
        release_date: "August 2, 2016",
        wikipedia: "Jeffrey_Toobin",
        poster: "img/american_heiress.jpg",
        genre: ["Nonfiction", "True Crime", "History", "Biography", "Crime", "American History"]
    },
    {
        isbn: 9780735223585,
        title: "American Prison: A Reporter's Undercover Journey into the Business of Punishment",
        overview: "In 2014, Shane Bauer was hired for $9 an hour to work as an entry-level prison guard at a private prison in Winnfield, Louisiana. An award-winning investigative journalist, he used his real name; In American Prison, Bauer weaves a much deeper reckoning with his experiences together with a thoroughly researched history of for-profit prisons in America from their origins in the decades before the Civil War. For, as he soon realized, we can't understand the cruelty of our current system and its place in the larger story of mass incarceration without understanding where it came from. Private prisons became entrenched in the South as part of a systemic effort to keep the African-American labor force in place in the aftermath of slavery, and the echoes of these shameful origins are with us still.",
        pages: "351",
        author: "Shane Bauer",
        release_date: "September 18, 2018",
        wikipedia: "American_Prison",
        poster: "img/american_prison.jpg",
        genre: ["Nonfiction", "History", "Politics", "Social Justice", "Sociology", "Journalism", "Race"]
    },
    {
        isbn: 9780451524935,
        title: "Amusing Ourselves to Death: Public Discourse in the Age of Show Business",
        overview: "Television has conditioned us to tolerate visually entertaining material measured out in spoonfuls of time, to the detriment of rational public discourse and reasoned public affairs. In this eloquent, persuasive book, Neil Postman alerts us to the real and present dangers of this state of affairs, and offers compelling suggestions as to how to withstand the media onslaught. Before we hand over politics, education, religion, and journalism to the show business demands of the television age, we must recognize the ways in which the media shape our lives and the ways we can, in turn, shape them to serve out highest goals.",
        pages: "184",
        author: "Neil Postman",
        release_date: "November 25, 1985",
        wikipedia: "Amusing_Ourselves_to_Death",
        poster: "img/amusing_ourselves_to_death.jpg",
        genre: ["Nonfiction", "Philosophy", "Sociology", "Politics", "Cultural", "Psychology", "Technology"]
    },
    {
        isbn: 9780451524935,
        title: "Animal Farm",
        overview: "This remarkable book has been described in many ways—as a masterpiece…a fairy story…a brilliant satire…a frightening view of the future. A devastating attack on the pig-headed, gluttonous and avaricious rulers in an imaginary totalitarian state, it illuminates the range of human experience from love to hate, from comedy to tragedy.",
        pages: "128",
        author: "George Orwell",
        release_date: "August 17, 1945",
        wikipedia: "Animal_Farm",
        poster: "img/animal_farm.jpg",
        genre: ["Classics", "Fiction", "Dystopia", "Fantasy", "Politics", "Literature"]
    },
    {
        isbn: 9780063001701,
        title: "Apocalypse Never: Why Environmental Alarmism Hurts Us All",
        overview: "Michael Shellenberger has been fighting for a greener planet for decades. He helped save the world’s last unprotected redwoods. He co-created the predecessor to today’s Green New Deal. And he led a successful effort by climate scientists and activists to keep nuclear plants operating, preventing a spike of emissions. <p> But in 2019, as some claimed “billions of people are going to die,” contributing to rising anxiety, including among adolescents, Shellenberger decided that, as a lifelong environmental activist, leading energy expert, and father of a teenage daughter, he needed to speak out to separate science from fiction. <p> Despite decades of news media attention, many remain ignorant of basic facts. Carbon emissions peaked and have been declining in most developed nations for over a decade. Deaths from extreme weather, even in poor nations, declined 80 percent over the last four decades. And the risk of Earth warming to very high temperatures is increasingly unlikely thanks to slowing population growth and abundant natural gas. <p> Curiously, the people who are the most alarmist about the problems also tend to oppose the obvious solutions. <p> What’s really behind the rise of apocalyptic environmentalism? There are powerful financial interests. There are desires for status and power. But most of all there is a desire among supposedly secular people for transcendence. This spiritual impulse can be natural and healthy. But in preaching fear without love, and guilt without redemption, the new religion is failing to satisfy our deepest psychological and existential needs.",
        pages: "272",
        author: "Michael Shellenberger",
        release_date: "June 23, 2020",
        wikipedia: "Apocalypse_Never",
        poster: "img/apocalypse_never.jpg",
        genre: ["Nonfiction", "Science", "Politics", "Environment", "Climate Change", "Economics", "Nature"]
    },
    {
        isbn: 9780316132947,
        title: "Area 51: An Uncensored History of America's Top Secret Military Base",
        overview: "It is the most famous military installation in the world. And it doesn’t exist. Located a mere seventy-five miles outside of Las Vegas in Nevada’s desert, the base has never been acknowledged by the U.S. government-but Area 51 has captivated imaginations for decades. <p> Myths and hypotheses about Area 51 have long abounded, thanks to the intense secrecy enveloping it. Some claim it is home to aliens, underground tunnel systems, and nuclear facilities. Others believe that the lunar landing itself was filmed there. The prevalence of these rumors stems from the fact that no credible insider has ever divulged the truth about his time inside the base. Until now. <p> Annie Jacobsen had exclusive access to nineteen men who served the base proudly and secretly for decades and are now aged 75-92, and unprecedented access to fifty-five additional military and intelligence personnel, scientists, pilots, and engineers linked to the secret base, thirty-two of whom lived and worked there for extended periods. In Area 51, Jacobsen shows us what has really gone on in the Nevada desert, from testing nuclear weapons to building super-secret, supersonic jets to pursuing the War on Terror. <p> This is the first book based on interviews with eye witnesses to Area 51 history, which makes it the seminal work on the subject. Filled with formerly classified information that has never been accurately decoded for the public, Area 51 weaves the mysterious activities of the top-secret base into a gripping narrative, showing that facts are often more fantastic than fiction, especially when the distinction is almost impossible to make.",
        pages: "540",
        author: "Annie Jacobsen",
        release_date: "May 17, 2011",
        wikipedia: "Area_51:_An_Uncensored_History_of_America's_Top_Secret_Military_Base",
        poster: "img/area_51.jpg",
        genre: ["Nonfiction", "History", "Science", "Military Fiction", "Politics", "War"]
    },
    {
        isbn: 9781556520747,
        title: "Assata: An Autobiography",
        overview: "On May 2, 1973, Black Panther Assata Shakur (aka JoAnne Chesimard) lay in a hospital, close to death, handcuffed to her bed, while local, state, and federal police attempted to question her about the shootout on the New Jersey Turnpike that had claimed the life of a white state trooper. Long a target of J. Edgar Hoover's campaign to defame, infiltrate, and criminalize Black nationalist organizations and their leaders, Shakur was incarcerated for four years prior to her conviction on flimsy evidence in 1977 as an accomplice to murder. <p> This intensely personal and political autobiography belies the fearsome image of JoAnne Chesimard long projected by the media and the state. With wit and candor, Assata Shakur recounts the experiences that led her to a life of activism and portrays the strengths, weaknesses, and eventual demise of Black and White revolutionary groups at the hand of government officials. The result is a signal contribution to the literature about growing up Black in America that has already taken its place alongside The Autobiography of Malcolm X and the works of Maya Angelou. <p> Two years after her conviction, Assata Shakur escaped from prison. She was given political asylum by Cuba, where she now resides.",
        pages: "274",
        author: "Assata Shakur",
        release_date: "January 1, 1987",
        wikipedia: "Assata:_An_Autobiography",
        poster: "img/assata.jpg",
        genre: ["Nonfiction", "Memoir", "Biography", "Race", "History", "Feminism", "Politics"]
    },
    {
        isbn: 9780452011878,
        title: "Atlas Shrugged",
        overview: "This is the story of a man who said that he would stop the motor of the world and did. Was he a destroyer or the greatest of liberators? <p> Why did he have to fight his battle, not against his enemies, but against those who needed him most, and his hardest battle against the woman he loved? What is the world’s motor — and the motive power of every man? You will know the answer to these questions when you discover the reason behind the baffling events that play havoc with the lives of the characters in this story. <p> Tremendous in its scope, this novel presents an astounding panorama of human life — from the productive genius who becomes a worthless playboy — to the great steel industrialist who does not know that he is working for his own destruction — to the philosopher who becomes a pirate — to the composer who gives up his career on the night of his triumph — to the woman who runs a transcontinental railroad — to the lowest track worker in her Terminal tunnels. <p> You must be prepared, when you read this novel, to check every premise at the root of your convictions. <p> This is a mystery story, not about the murder — and rebirth — of man’s spirit. It is a philosophical revolution, told in the form of an action thriller of violent events, a ruthlessly brilliant plot structure and an irresistible suspense. Do you say this is impossible? Well, that is the first of your premises to check.",
        pages: "1168",
        author: "Ayn Rand",
        release_date: "October 10, 1957",
        wikipedia: "Atlas_Shrugged",
        poster: "img/atlas_shrugged.jpg",
        genre: ["Fiction", "Classics", "Philosophy", "Politics", "Literature", "Science Fiction", "Novels"]
    },
    {
        isbn: 9780195115017,
        title: "Becoming Attached: First Relationships and How They Shape Our Capacity to Love",
        overview: "The struggle to understand the parent-child bond ranks as one of the great quests of modern psychology, one that touches us deeply because it holds so many clues to how we become who we are. How are our personalities formed? How do our early struggles with our parents reappear in the way we relate to others as adults? <p> In Becoming Attached, Robert Karen offers fresh insight into some of the most fundamental issues of emotional life. He explores such questions as: <p>* What do children need to feel that the world is a positive place and that they have value? <p>* What are the risks of day care for children under one year of age, and what can parents do to manage those risks? <p>* What experiences in infancy will enable a person to develop healthy relationships as an adult? <p> Becoming Attached is not just a voyage of discovery in child emotional development and its pertinence to adult life but a voyage of personal discovery as well, for it is impossible to read this book without reflecting on one's own life as a child, a parent, and an intimate partner in love or marriage.",
        pages: "512",
        author: "Robert Karen",
        release_date: "January 1, 1994",
        wikipedia: "",
        poster: "img/becoming_attached.jpg",
        genre: ["Psychology", "Parenting", "Nonfiction", "Relationships", "Counselling", "Self Help", "Science"]
    },
    {
        isbn: 9780938077008,
        title: "Being Peace",
        overview: "Since its publication in 1987, \"Being Peace\" has become a classic of contemporary religious literature. In his simple and readable style, Thich Nhat Hanh shows how our state of mind and body can make the world a peaceful place. We learn to transform the very situations that pressure and antagonize us into opportunities for practicing mindfulness.",
        pages: "115",
        author: "Thich Nhat Hanh",
        release_date: "January 1, 1987",
        wikipedia: "Thích_Nhất_Hạnh",
        poster: "img/being_peace.jpg",
        genre: ["Buddhism", "Spirituality", "Nonfiction", "Philosophy", "Religion", "Self Help"]
    },
    {
        isbn: 9780316010665,
        title: "Blink: The Power of Thinking Without Thinking",
        overview: "Drawing on cutting-edge neuroscience and psychology and displaying all of the brilliance that made The Tipping Point a classic, Blink changes the way you'll understand every decision you make. Never again will you think about thinking the same way. <p> Malcolm Gladwell redefined how we understand the world around us. Now, in Blink, he revolutionizes the way we understand the world within. Blink is a book about how we think without thinking, about choices that seem to be made in an instant - in the blink of an eye - that actually aren't as simple as they seem. Why are some people brilliant decision makers, while others are consistently inept? Why do some people follow their instincts and win, while others end up stumbling into error? How do our brains really work - in the office, in the classroom, in the kitchen, and in the bedroom? And why are the best decisions often those that are impossible to explain to others? <p> In Blink we meet the psychologist who has learned to predict whether a marriage will last, based on a few minutes of observing a couple; the tennis coach who knows when a player will double-fault before the racket even makes contact with the ball; the antiquities experts who recognize a fake at a glance. Here, too, are great failures of \"blink\": the election of Warren Harding; \"New Coke\"; and the shooting of Amadou Diallo by police. Blink reveals that great decision makers aren't those who process the most information or spend the most time deliberating, but those who have perfected the art of \"thin-slicing\" - filtering the very few factors that matter from an overwhelming number of variables.",
        pages: "296",
        author: "Malcolm Gladwell",
        release_date: "January 11, 2005",
        wikipedia: "Blink:_The_Power_of_Thinking_Without_Thinking",
        poster: "img/blink.jpg",
        genre: ["Nonfiction", "Psychology", "Business", "Self Help", "Science", "Sociology"]
    },
    {
        isbn: 9781328663795,
        title: "Blitzed: Drugs in the Third Reich",
        overview: "The Nazis presented themselves as warriors against moral degeneracy. Yet, as Norman Ohler's gripping best seller reveals, the entire Third Reich was permeated with drugs: cocaine, heroin, morphine and, most of all, methamphetamines, or crystal meth, used by everyone from factory workers to housewives, and crucial to troops; resilience - even partly explaining German victory in 1940. <p> The promiscuous use of drugs at the very highest levels also impaired and confused decision-making, with Hitler and his entourage taking refuge in potentially lethal cocktails of stimulants administered by the physician Dr Morell as the war turned against Germany. While drugs cannot on their own explain the events of the Second World War or its outcome, Ohler shows, they change our understanding of it. Blitzed forms a crucial missing piece of the story.",
        pages: "304",
        author: "Norman Ohler",
        release_date: "September 10, 2015",
        wikipedia: "Norman_Ohler",
        poster: "img/blitzed.jpg",
        genre: ["History", "Nonfiction", "War", "World War II", "Germany"]
    },
    {
        isbn: 9780060193393,
        title: "Body for Life: 12 Weeks to Mental and Physical Strength",
        overview: "Bill Phillips had been publishing bodybuilding magazines and marketing nutritional supplements for years when he had a weird revelation at a trade show: many of the most loyal and enthusiastic readers he had were totally out of shape. From that uncomfortable realization came his popular Physique Transformation Contest (top prize that first year: Phillips's own Lamborghini), now world famous, and this book. <p> The three-times-a-week weightlifting program in Body for Life is deceptively simple. If you've spent any time in the gym, you've already done all the exercises. But Phillips includes a couple of high-intensity sets at the end of each exercise that should compound the training effect on each muscle group. Same goes for the cardiovascular exercise he recommends: just 20 minutes, three times a week. But those 20 minutes are spent jacking the intensity up and down, accomplishing more in less time. <p> Phillips arranges all this into a 12-week program, along with nutritional and motivational tips. Be warned that the nutritional advice gets a little spacey. For example, he puts \"carbohydrates\" and \"vegetables\" into separate categories, and recommends three daily doses of a nutritional supplement called Myoplex, which his company manufactures. (Fortunately, he gives tips on how to make each dose taste different, such as by adding drops of peppermint extract.) Despite this strangeness, Body for Life still motivates because so many others have achieved astounding results in similar 12-week windows, and the pictures and testimonials are here as evidence. ",
        pages: "201",
        author: "Bill Phillips",
        release_date: "June 10, 1999",
        wikipedia: "Body_for_Life",
        poster: "img/body_for_life.jpg",
        genre: ["Health", "Nonfiction", "Fitness", "Self Help", "Sports", "Reference", "Diets"]
    },
    {
        isbn: 9780736801683,
        title: "Bungee Jumping",
        overview: "Discusses the history, stunts, competitions, equipment, and safety measures of bungee jumping.",
        pages: "48",
        author: "Jason Glaser",
        release_date: "April 1, 1999",
        wikipedia: "",
        poster: "img/bungee_jumping.jpg",
        genre: ["Bungee Jumping"]
    },
    {
        isbn: 9780934802819,
        title: "Bungee Jumping: For Fun and Profit",
        overview: "Define Bungee jumping. Be prepared for what you will experience. Discover bungee jumping's history in the jungles of the Vanuatu Islands in the Pacific Ocean. Locate sites for bungee jumping and make them safe. Prepare cords and rig all types of sites. Know what is needed to start a commercial site or a private site. Find suppliers of cords. Train Site-operators. Prevent injuries as a result of negligence. Publicize, promote and finance your own bungee business. Jump from a bridge, hot air balloon, crane or tower. Utilize cords, ankle harnesses and body harnesses. Understand legalities and zoning regulations of bungee jumping as well as health and age concerns as they relate to insurance validity. Judge the quality of a commercial site with personal satisfaction.",
        pages: "216",
        author: "Nancy Frase",
        release_date: "August 1, 1992",
        wikipedia: "",
        poster: "img/bungee_jumping_for_fun_and_profit.jpg",
        genre: ["Bungee Jumping"]
    },
    {
        isbn: 9780805066692,
        title: "Bury My Heart at Wounded Knee: An Indian History of the American West",
        overview: "Now a special 30th-anniversary edition in both hardcover and paperback, the classic bestselling history The New York Times called \"Original, remarkable, and finally heartbreaking...Impossible to put down.\" <p> Bury My Heart at Wounded Knee is Dee Brown's eloquent, fully documented account of the systematic destruction of the American Indian during the second half of the nineteenth century. A national bestseller in hardcover for more than a year after its initial publication, it has sold almost four million copies and has been translated into seventeen languages. For this elegant thirtieth-anniversary edition—published in both hardcover and paperback—Brown has contributed an incisive new preface. <p> Using council records, autobiographies, and firsthand descriptions, Brown allows the great chiefs and warriors of the Dakota, Ute, Sioux, Cheyenne, and other tribes to tell us in their own words of the battles, massacres, and broken treaties that finally left them demoralized and defeated. A unique and disturbing narrative told with force and clarity, Bury My Heart at Wounded Knee changed forever our vision of how the West was really won.",
        pages: "509",
        author: "Dee Brown",
        release_date: "April 1, 1970",
        wikipedia: "Bury_My_Heart_at_Wounded_Knee",
        poster: "img/bury_my_heart_at_wounded_knee.jpg",
        genre: ["History", "Nonfiction", "American History", "Classics", "Historical", "Politics", "Race"]
    },
    {
        isbn: 9780684824475,
        title: "Capone: The Man and the Era",
        overview: "In this brilliant history of Prohibition and its most notorious gangster, acclaimed biographer Laurence Bergreen takes us to the gritty streets of Chicago where Al Capone forged his sinister empire. <p> Bergreen shows the seedy and glamorous sides of the age, the rise of Prohibition, the illicit liquor trade, the battlefield that was Chicago. Delving beyond the Capone mythology. Bergreen finds a a coldblooded killer, thief, pimp, and racketeer who was also a devoted son and father; a self-styled Robin Hood who rose to the top of organized crime. Capone is a masterful portrait of an extraordinary time and of the one man who reigned supreme over it all, Al Capone.",
        pages: "704",
        author: "Laurence Bergreen",
        release_date: "August 4, 1994",
        wikipedia: "Laurence_Bergreen",
        poster: "img/capone.jpg",
        genre: ["Biography", "History", "True Crime", "Crime", "Nonfiction", "American History"]
    },
    {
        isbn: 9780684833392,
        title: "Catch-22",
        overview: "Fifty years after its original publication, Catch-22 remains a cornerstone of American literature and one of the funniest—and most celebrated—books of all time. In recent years it has been named to “best novels” lists by Time, Newsweek, the Modern Library, and the London Observer. <p> Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved. <p> This fiftieth-anniversary edition commemorates Joseph Heller’s masterpiece with a new introduction by Christopher Buckley; a wealth of critical essays and reviews by Norman Mailer, Alfred Kazin, Anthony Burgess, and others; rare papers and photos from Joseph Heller’s personal archive; and much more. Here, at last, is the definitive edition of a classic of world literature.",
        pages: "453",
        author: "Joseph Heller",
        release_date: "November 10, 1961",
        wikipedia: "Catch-22",
        poster: "img/catch-22.jpg",
        genre: ["Classics", "Fiction", "War", "Humor", "Literature", "Novels"]
    },
    {
        isbn: 9780316477574,
        title: "Chaos: Charles Manson, the CIA, and the Secret History of the Sixties",
        overview: "A journalist's twenty-year obsession with the Manson murders brings shocking revelations about the most infamous crimes in American history: carelessness from police, misconduct by prosecutors, and even potential surveillance by intelligence agents. What really happened in 1969? <p> In 1999, when Tom O'Neill was assigned a magazine piece about the thirtieth anniversary of the Manson murders, he worried there was nothing new to say. Weren't the facts indisputable? Charles Manson had ordered his teenage followers to commit seven brutal murders, and in his thrall, they'd gladly complied. But when O'Neill began reporting the story, he kept finding holes in the prosecutor Vincent Bugliosi's narrative, long enshrined in the best-selling Helter Skelter. Before long, O'Neill had questions about everything from the motive to the manhunt. Though he'd never considered himself a conspiracy theorist, the Manson murders swallowed the next two decades of his career. He was obsessed. <p> Searching but never speculative, CHAOS follows O'Neill's twenty-year effort to rebut the \"official\" story behind Manson. Who were his real friends in Hollywood, and how far would they go to hide their ties? Why didn't law enforcement act on their many chances to stop him? And how did he turn a group of peaceful hippies into remorseless killers? O'Neill's hunt for answers leads him from reclusive celebrities to seasoned spies, from the Summer of Love to the shadowy sites of the CIA's mind-control experiments, on a trail rife with cover-ups and coincidences. <p> Featuring hundreds of new interviews and dozens of never-before-seen documents from the LAPD, the FBI, and the CIA, CHAOS mounts an argument that could be, according to Los Angeles Deputy District Attorney Stephen Kay, strong enough to overturn the verdicts on the Manson murders. In those two dark nights in Los Angeles, O'Neill finds the story of California in the sixties: when charlatans mixed with prodigies, free love was as possible as brainwashing, and utopia-or dystopia-was just an acid trip away.",
        pages: "504",
        author: "Tom O'Neill",
        release_date: "June 25, 2019",
        wikipedia: "CHAOS:_Charles_Manson,_the_CIA,_and_the_Secret_History_of_the_Sixties",
        poster: "img/chaos.jpg",
        genre: ["Nonfiction", "History", "True Crime", "Crime", "Politics"]
    },
    {
        isbn: 9780451524935,
        title: "Charged: The New Movement to Transform American Prosecution and End Mass Incarceration",
        overview: "NEW YORK TIMES BESTSELLER • A renowned journalist and legal commentator exposes the unchecked power of the prosecutor as a driving force in America’s mass incarceration crisis—and charts a way out. <p> “An important, thoughtful, and thorough examination of criminal justice in America that speaks directly to how we reduce mass incarceration.”—Bryan Stevenson, author of  Just Mercy <p> “This harrowing, often enraging book is a hopeful one, as well, profiling innovative new approaches and the frontline advocates who champion them.”—Matthew Desmond, author of  Evicted <p> FINALIST FOR THE LOS ANGELES TIMES BOOK PRIZE • SHORTLISTED FOR THE J. ANTHONY LUKAS BOOK PRIZE • NAMED ONE OF THE BEST BOOKS OF THE YEAR BY NPR • The New York Public Library • Library Journal • Publishers Weekly • Kirkus Reviews <p> The American criminal justice system is supposed to be a contest between two equal adversaries, the prosecution and the defense, with judges ensuring a fair fight. That image of the law does not match the reality in the courtroom, however. Much of the time, it is prosecutors more than judges who control the outcome of a case, from choosing the charge to setting bail to determining the plea bargain. They often decide who goes free and who goes to prison, even who lives and who dies. In  Charged,  Emily Bazelon reveals how this kind of unchecked power is the underreported cause of enormous injustice—and the missing piece in the mass incarceration puzzle. <p> Charged  follows the story of two young people caught up in the criminal justice Kevin, a twenty-year-old in Brooklyn who picked up his friend’s gun as the cops burst in and was charged with a serious violent felony, and Noura, a teenage girl in Memphis indicted for the murder of her mother. Bazelon tracks both cases—from arrest and charging to trial and sentencing—and, with her trademark blend of deeply reported narrative, legal analysis, and investigative journalism, illustrates just how criminal prosecutions can go wrong and, more important, why they don’t have to. <p> Bazelon also details the second chances they prosecutors can extend, if they choose, to Kevin and Noura and so many others. She follows a wave of reform-minded D.A.s who have been elected in some of our biggest cities, as well as in rural areas in every region of the country, put in office to do nothing less than reinvent how their job is done. If they succeed, they can point the country toward a different and profoundly better future.",
        pages: "448",
        author: "Emily Bazelon",
        release_date: "April 9, 2019",
        wikipedia: "Emily_Bazelon",
        poster: "img/charged.jpg",
        genre: ["Nonfiction", "Politics", "Law", "Social Justice", "Race", "History", "Sociology"]
    },
    {
        isbn: 9780358522508,
        title: "Chasing The Light: Writing, Directing, and Surviving Platoon, Midnight Express, Scarface, Salvador, and the Movie Game",
        overview: "An intimate memoir by the controversial and outspoken Oscar-winning director and screenwriter about his complicated New York childhood, volunteering for combat, and his struggles and triumphs making such films as Platoon, Midnight Express, and Scarface. <p> Before the international success of Platoon in 1986, Oliver Stone had been wounded as an infantryman in Vietnam, and spent years writing unproduced scripts while driving taxis in New York, finally venturing westward to Los Angeles and a new life. Stone, now 73, recounts those formative years with in-the-moment details of the high and low moments: We see meetings with Al Pacino over Stone’s scripts for Scarface, Platoon, and Born on the Fourth of July; the harrowing demon of cocaine addiction following the failure of his first feature, The Hand (starring Michael Caine); his risky on-the-ground research of Miami drug cartels for Scarface; his stormy relationship with The Deer Hunter director Michael Cimino; the breathless hustles to finance the acclaimed and divisive Salvador; and tensions behind the scenes of his first Academy Award–winning film, Midnight Express. <p> Chasing the Light is a true insider’s look at Hollywood’s years of upheaval in the 1970s and ’80s.",
        pages: "368",
        author: "Oliver Stone",
        release_date: "July 21, 2020",
        wikipedia: "Oliver_Stone",
        poster: "img/chasing_the_light.jpg",
        genre: ["Nonfiction", "Biography", "Film", "Memoir", "Autobiography", "History"]
    },
    {
        isbn: 9780451524935,
        title: "China in Ten Words",
        overview: "From one of China’s most acclaimed writers, his first work of nonfiction to appear in a unique, intimate look at the Chinese experience over the last several decades, told through personal stories and astute analysis that sharply illuminate the country’s meteoric economic and social transformation. <p> Framed by ten phrases common in the Chinese vernacular—“people,” “leader,” “reading,” “writing,” “Lu Xun” (one of the most influential Chinese writers of the twentieth century), “disparity,” “revolution,” “grassroots,” “copycat,” and “bamboozle”— China in Ten Words reveals as never before the world’s most populous yet oft-misunderstood nation. In “Disparity,” for example, Yu Hua illustrates the mind-boggling economic gaps that separate citizens of the country. In “Copycat,” he depicts the escalating trend of piracy and imitation as a creative new form of revolutionary action. And in “Bamboozle,” he describes the increasingly brazen practices of trickery, fraud, and chicanery that are, he suggests, becoming a way of life at every level of society. <p> Characterized by Yu Hua’s trademark wit, insight, and courage, China in Ten Words is a refreshingly candid vision of the “Chinese miracle” and all its consequences, from the singularly invaluable perspective of a writer living in China today.",
        pages: "240",
        author: "Yu Hua",
        release_date: "January 1, 2011",
        wikipedia: "China_in_Ten_Words",
        poster: "img/china_in_ten_words.jpg",
        genre: ["China", "Nonfiction", "History", "Essays", "Asia", "Memoir", "Politics"]
    },
    {
        isbn: 9780787114329,
        title: "Chosen by Fate: My Life Inside Death Row Records",
        overview: "A biography of the infamous Death Row Records company is told by a former insider and a respected journalist, providing a balanced look at the history and future of an organization fraught with rumors and violent ends to its artists.",
        pages: "189",
        author: "McKinley Lee Jr.",
        release_date: "January 1, 1997",
        wikipedia: "",
        poster: "img/chosen_by_fate.jpg",
        genre: ["Nonfiction", "Crime"]
    },
    {
        isbn: 9780609608319,
        title: "Closing Argument: Defending (and Befriending) John Gotti, and Other Legal Battles I Have Waged",
        overview: "Bruce Cutler, one of the most famous lawyers in America, has never told his story—until now. Best known for his tenacious and highly publicized defense of John Gotti in the 1980s and early 1990s, Cutler personified a confidence, passion, and legal thoroughness that repeatedly defied a government determined to bring Gotti to his knees. A ubiquitous presence at Gotti’s side in and out of the courtroom—and on the front pages of newspapers around the country—Cutler became almost as infamous as his client. And, as John Gotti became a lightning rod for every prosecutor seeking glory, reputation, or promotion, Cutler too became a lightning rod for controversy. According to the feds, Bruce Cutler may have gotten too close, and they made sure that both he and his client paid the price. <p> Cutler, the son of a detective turned lawyer, resolved his choice of profession early in life and plunged headlong into the tumultuous and at times surreal world of the New York legal system. In Closing Argument , Cutler recounts his time as an aggressive, tireless assistant D.A. in Brooklyn; how he switched sides and became a fiercely dedicated defense attorney working with Barry Slotnick, one of New York’s premier criminal attorneys; and the path that led him to John Gotti’s side in court. It was March 28, 1985, to be He was thirty-six years old, and it was a moment that would change both men’s lives forever. <p> Closing Argument is the inside story of how Bruce Cutler and John Gotti frustrated the feds so much that they finally had to break the rules themselves to convict the so-called Teflon Don. The years Cutler and Gotti spent together were a kind of golden age of criminal (and in particular organized crime) litigation, and both lawyer and client were at the red-hot center of it all. What neither man may have realized then is that the famous trials were mostly about the government’s wanting to put an end to a certain way of life, one that John Gotti and his like embodied. The conviction of Gotti, and his subsequent death in 2002 while serving a life sentence in solitary confinement, marked the end of an era. Closing Argument is a glimpse into the world of John the talk around the table at the notorious Ravenite social club; the murder of Paul Castellano; Gotti’s feelings about the treachery of Sammy “The Bull” Gravano and the alleged betrayal by Wilfred “Willie Boy” Johnson; and what it took to make it in a world with its own set of unbreakable rules. <p> This fascinating document makes clear that Gotti and Cutler were perfectly matched. Their inability to compromise, their full-throttle approach to their defense, and the charisma that made them the favorites of the press, were their strengths and, ironically, what made them such inviting targets to a host of prosecutors. <p> Bruce Cutler, in typical style, pulls no punches in Closing Argument . It is very rare for a practicing lawyer to talk with the kind of candor he does here, and it is rarer for any lawyer to ever become as passionate and emotionally involved as he did with his client, John Gotti.",
        pages: "288",
        author: "Bruce Cutler",
        release_date: "March 18, 2003",
        wikipedia: "Bruce_Cutler",
        poster: "img/closing_argument.jpg",
        genre: ["History", "True Crime", "Crime", "Nonfiction"]
    },
    {
        isbn: 9780385671743,
        title: "Cold Hard Truth: On Business, Money & Life",
        overview: "Kevin O’Leary shares invaluable secrets on entrepreneurship, business, money and life. <p> Can you make millions just by “visualizing yourself rich” as some business prophets suggest? Don’t buy it, says Kevin O’Leary. If you want to be a successful entrepreneur and amass wealth, you’re going to have to work for it. But the good news is: with the right guidance, focus and perseverance, you can turn entrepreneurial vision into lucrative reality and have the personal freedom that only wealth can buy. <p> Kevin O’Leary would know. The much-feared and revered Dragon on the immensely popular show Dragons’ Den (and Shark Tank in the U.S.) started his company in his basement with a $10,000 loan from his financially savvy mother. A few years later, Kevin sold that company for more than four billion dollars. In this compelling, candid and, above all else, brutally honest business memoir, Kevin provides engaging, practical advice and lessons that will give anyone a distinct competitive edge.",
        pages: "256",
        author: "Kevin O’Leary",
        release_date: "September 27, 2011",
        wikipedia: "Kevin_O%27Leary",
        poster: "img/cold_hard_truth.jpg",
        genre: ["Business", "Nonfiction", "Biography", "Finance", "Entrepreneurship", "Personal Development"]
    },
    {
        isbn: 9781476778266,
        title: "Come and Take It: The Gun Printer's Guide to Thinking Free",
        overview: "Cody Wilson, a self-described crypto-anarchist and rogue thinker, combines the controversial yet thrilling story of the production of the first ever 3D printable gun with a startling philosophical manifesto that gets to the heart of the twenty-first century debate over the freedom of information and ideas. <p> Reminiscent of the classic Steal This Book by Abbie Hoffman, Cody Wilson has written a unique, critical, and philosophical guide through the digital revolution. Deflecting interference from the State Department and the Bureau of Alcohol, Tobacco, Firearms and Explosives, the story of Defense Distributed—where Wilson’s employees work against all odds to defend liberty and the right to access arms through the production of 3D printed firearms—takes us across continents, into dusty warehouses and high rise condominiums, through television studios, to the Texas desert, and beyond. <p> Harkening to both Zen and the Art of Motorcycle Maintenance and The Anarchist Cookbook , Come and Take It follows a group of digital radicals as they navigate political subterfuge to create a technological miracle, against all odds. Combining elements of a modern-day thriller with a fascinating philosophical treatise, Wilson paints a scathing and timely portrait of an ideologically polarized America and his own struggle in the fight for liberty.",
        pages: "320",
        author: "Cody Wilson",
        release_date: "October 11, 2016",
        wikipedia: "Cody_Wilson",
        poster: "img/come_and_take_it.jpg",
        genre: ["Philosophy", "Politics", "Nonfiction", "Memoir", "War", "Political Science", "Law"]
    },
    {
        isbn: 9780307453426,
        title: "Coming Apart: The State of White America, 1960-2010",
        overview: "From the bestselling author of Losing Ground and The Bell Curve, this startling long-lens view shows how America is coming apart at the seams that historically have joined our classes. <p> In Coming Apart, Charles Murray explores the formation of American classes that are different in kind from anything we have ever known, focusing on whites as a way of driving home the fact that the trends he describes do not break along lines of race or ethnicity. <p> Drawing on five decades of statistics and research, Coming Apart demonstrates that a new upper class and a new lower class have diverged so far in core behaviors and values that they barely recognize their underlying American kinship—divergence that has nothing to do with income inequality and that has grown during good economic times and bad. <p> The top and bottom of white America increasingly live in different cultures, Murray argues, with the powerful upper class living in enclaves surrounded by their own kind, ignorant about life in mainstream America, and the lower class suffering from erosions of family and community life that strike at the heart of the pursuit of happiness. That divergence puts the success of the American project at risk. <p> The evidence in Coming Apart is about white America. Its message is about all of America.",
        pages: "416",
        author: "Charles Murray",
        release_date: "January 1, 2012",
        wikipedia: "Coming_Apart_(book)",
        poster: "img/coming_apart.jpg",
        genre: ["Nonfiction", "Politics", "History", "Sociology", "Economics", "Cultural", "Race"]
    },
    {
        isbn: 9780307956644,
        title: "Confessions of a Sociopath: A Life Spent Hiding in Plain Sight",
        overview: "The first memoir of its kind, Confessions of a Sociopath is an engrossing, highly captivating narrative of the author's life as a diagnosed sociopath. <p> She is a charismatic charmer, an ambitious self-promoter, and a cunning and calculating liar. She can induce you to invest in her financial schemes, vote for her causes, and even join her in bed. Like a real-life Lisbeth Salander, she has her own system of ethics, and like Dexter, she thrives on bending and occasionally breaking the rules. She is a diagnosed, high-functioning, noncriminal sociopath, and this is her world from her point of view. <p> Drawn from the author's own experiences; her popular blog, Sociopathworld.com; and scientific literature, Confessions of a Sociopath is part confessional memoir, part primer for the curious. Written from the point of view of a diagnosed sociopath, it unveils for the very first time these people who are hiding in plain sight. The book confirms suspicions and debunks myths about sociopathy, providing a road map for dealing with the sociopath in your life.",
        pages: "320",
        author: "M.E. Thomas",
        release_date: "May 14, 2013",
        wikipedia: "Confessions_of_a_Sociopath",
        poster: "img/confessions_of_a_sociopath.jpg",
        genre: ["Nonfiction", "Psychology", "Memoir", "Biography", "Mental Health", "Autobiography"]
    },
    {
        isbn: 9780066619989,
        title: "Consulting Demons: Inside the Unscrupulous World of Global Corporate Consulting",
        overview: "In this gripping and colorful account of the American dream gone astray, Lewis Pinault provides the essential guidelines on how to get ahead and an enlightening perspective on the brutal infighting that can engulf even the most civilized consulting firm. This stunning exposé of some of the most prestigious and respected names in the business leads you into a world where a client's interests are skillfully subordinated to those of the consultants, where money rules the day, and where principles and morals are unwelcome baggage. Humorous and insightful, this no-holds-barred account takes you behind the scenes of the dehumanizing indoctrination of an academic intellectual into an exploitative -- and exploited -- \"global transformation contractor.\" Featuring new material dealing with the e-consulting industry's boom, bust, and its future, Consulting Demons offers the most complete look at an industry that exacts the highest prices for the most questionable standards of success.",
        pages: "288",
        author: "Lewis Pinault",
        release_date: "January 26, 2000",
        wikipedia: "",
        poster: "img/consulting_demons.jpg",
        genre: ["Business", "Nonfiction", "Management"]
    },
    {
        isbn: 9781937134679,
        title: "Conversational Intelligence: How Great Leaders Build Trust and Get Extraordinary Results",
        overview: "The key to success in life and business is to become a master at Conversational Intelligence. It’s not about how smart you are, but how open you are to learn new and effective powerful conversational rituals that prime the brain for trust, partnership, and mutual success. Conversational Intelligence translates the wealth of new insights coming out of neuroscience from across the globe, and brings the science down to earth so people can understand and apply it in their everyday lives. Author Judith Glaser presents a framework for knowing what kind of conversations trigger the lower, more primitive brain; and what activates higher-level intelligences such as trust, integrity, empathy, and good judgment. Conversational Intelligence makes complex scientific material simple to understand and apply through a wealth of easy to use tools, examples, conversational rituals, and practices for all levels of an organization.",
        pages: "256",
        author: "Judith E. Glaser",
        release_date: "October 1, 2013",
        wikipedia: "Judith_E._Glaser",
        poster: "img/conversational_intelligence.jpg",
        genre: ["Nonfiction", "Communication", "Self Help", "Management", "Psychology"]
    },
    {
        isbn: 9780679752066,
        title: "Courtroom 302: A Year Behind the Scenes in an American Criminal Courthouse",
        overview: "Courtroom 302 is the fascinating story of one year in Chicago's Cook County Criminal Courthouse, the busiest felony courthouse in the country. Here we see the system through the eyes of the men and women who experience it, not only in the courtroom but in the lockup, the jury room, the judge's chambers, the spectators' gallery. From the daily grind of the court to the highest-profile case of the year, Steve Bogira's masterful investigation raises fundamental issues of race, civil rights, and justice in America.",
        pages: "416",
        author: "Steve Bogira",
        release_date: "February 14, 2005",
        wikipedia: "",
        poster: "img/courtroom_302.jpg",
        genre: ["Nonfiction", "Law", "True Crime", "Crime", "Politics", "Sociology", "Memoir"]
    },
    {
        isbn: 9780143058144,
        title: "Crime and Punishment",
        overview: "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption.",
        pages: "671",
        author: "Fyodor Dostoevsky",
        release_date: "January 1, 1866",
        wikipedia: "Crime_and_Punishment",
        poster: "img/crime_and_punishment.jpg",
        genre: ["Classics", "Fiction", "Russia", "Literature", "Russian Literature", "Philosophy", "Novels"]
    },
    {
        isbn: 9780071446433,
        title: "Crimes Against Logic: Exposing the Bogus Arguments of Politicians, Priests, Journalists, and Other Serial Offenders",
        overview: "Uncover the truth under all the BS In the daily battle for our hearts and minds--not to mention our hard-earned cash--the truth is usually the first casualty. It's time we learned how to see through the rhetoric, faulty reasoning, and misinformation that we're subjected to from morning to night by talk-radio hosts, op-ed columnists, advertisers, self-help gurus, business \"thinkers,\" and, of course, politicians. And no one is better equipped to show us how than award-winning philosopher Jamie Whyte. In Crimes Against Logic Whyte take us on a fast-paced, ruthlessly funny romp through the mulligan stew of can, folderol, and bogus logic served up in the media, at the office, and even in your own home. Applying his laserlike wit to dozens of timely examples, Whyte cuts through the haze of facts, figures, and double-talk and gets at the real truth behind what they're telling us. \"An incisive philosopher.\"",
        pages: "157",
        author: "Jamie Whyte",
        release_date: "September 12, 2004",
        wikipedia: "Jamie_Whyte",
        poster: "img/crimes_against_logic.jpg",
        genre: ["Nonfiction", "Philosophy", "Logic", "Politics", "Science", "Psychology"]
    },
    {
        isbn: 9780679736394,
        title: "Darkness Visible: A Memoir of Madness",
        overview: "#1 NATIONAL BESTSELLER • A literary tour de force that chronicles a prize-winning author's descent into an almost suicidal depression. <p> \"Compelling ... Harrowing ... a vivid portrait of a debilitating disorder ... It offers the solace of a shared experience.\" — The New York Times <p> A work of great personal courage and a literary tour de force, this bestseller is Styron's true account of his experience of crippling depression. Styron is perhaps the first writer to convey the full terror of depression's psychic landscape, as well as the illuminating path to recovery.",
        pages: "84",
        author: "William Styron",
        release_date: "September 4, 1990",
        wikipedia: "Darkness_Visible_(memoir)",
        poster: "img/darkness_visible.jpg",
        genre: ["Nonfiction", "Psychology", "Memoir", "Mental Health", "Biography"]
    },
    {
        isbn: 9780316204361,
        title: "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
        overview: "In his #1 bestselling books The Tipping Point, Blink, and Outliers, Malcolm Gladwell has explored the ways we understand and change our world. Now he looks at the complex and surprising ways the weak can defeat the strong, the small can match up against the giant, and how our goals (often culturally determined) can make a huge difference in our ultimate sense of success. Drawing upon examples from the world of business, sports, culture, cutting-edge psychology, and an array of unforgettable characters around the world, David and Goliath is in many ways the most practical and provocative book Malcolm Gladwell has ever written.",
        pages: "305",
        author: "Malcolm Gladwell",
        release_date: "October 1, 2013",
        wikipedia: "David_and_Goliath_(book)",
        poster: "img/david_and_goliath.jpg",
        genre: ["Nonfiction", "Psychology", "Business", "Self Help", "Sociology", "Science"]
    },
    {
        isbn: 9780307590619,
        title: "Decision Points",
        overview: "In this candid and gripping account, President George W. Bush describes the critical decisions that shaped his presidency and personal life. <p> George W. Bush served as president of the United States during eight of the most consequential years in American history. The decisions that reached his desk impacted people around the world and defined the times in which we live. <p> Decision Points brings readers inside the Texas governor’s mansion on the night of the 2000 election, aboard Air Force One during the harrowing hours after the attacks of September 11, 2001, into the Situation Room moments before the start of the war in Iraq, and behind the scenes at the White House for many other historic presidential decisions. <p> For the first time, we learn President Bush’s perspective and insights on: <p> His decision to quit drinking and the journey that led him to his Christian faith. <p> The selection of the vice president, secretary of defense, secretary of state, Supreme Court justices, and other key officials. <p> His relationships with his wife, daughters, and parents, including heartfelt letters between the president and his father on the eve of the Iraq War. <p> His administration’s counterterrorism programs, including the CIA’s enhanced interrogations and the Terrorist Surveillance Program. <p> Why the worst moment of the presidency was hearing accusations that race played a role in the federal government’s response to Hurricane Katrina, and a critical assessment of what he would have done differently during the crisis. <p> His deep concern that Iraq could turn into a defeat costlier than Vietnam, and how he decided to defy public opinion by ordering the troop surge. <p> His legislative achievements, including tax cuts and reforming education and Medicare, as well as his setbacks, including Social Security and immigration reform. <p> The relationships he forged with other world leaders, including an honest assessment of those he did and didn’t trust. <p> Why the failure to bring Osama bin Laden to justice ranks as his biggest disappointment and why his success in denying the terrorists their fondest wish—attacking America again—is among his proudest achievements. <p> A groundbreaking new brand of presidential memoir, Decision Points will captivate supporters, surprise critics, and change perspectives on eight remarkable years in American history—and on the man at the center of events.",
        pages: "497",
        author: "George W. Bush",
        release_date: "January 1, 2010",
        wikipedia: "Decision_Points",
        poster: "img/decision_points.jpg",
        genre: ["Biography", "Nonfiction", "Politics", "History", "Memoir", "Presidents", "Autobiography"]
    },
    {
        isbn: 9781400068920,
        title: "Decoded",
        overview: "This is the intimate, first-person chronicle of the life and work of Jay-Z, born Shawn Carter in Brooklyn's notorious Marcy Projects, now known to many as the greatest rapper alive. <p> Told through lyrics, images and personal narrative, Decoded shares the story of Jay-Z's life through the 10 codes that define him, giving an unparalleled insight into his background, influences and the artistic process that shapes his work. Each chapter features a highly personal narrative section followed by a visually captivating selection of his most famous and provocative lyrics underlining the chapter's themes, along with Jay-Z's own 'decoding' of each lyric, uncovering the wordplay and stories behind the song. <p> This is a brilliant insight into the art and poetry of hip-hop, as well as the life of one of the genre's greatest artists.",
        pages: "336",
        author: "Jay Z",
        release_date: "November 16, 2009",
        wikipedia: "Decoded_(memoir)",
        poster: "img/decoded.jpg",
        genre: ["Nonfiction", "Music", "Biography", "Memoir", "Autobiography", "Poetry", "Hip Hop"]
    },
    {
        isbn: 9780451494085,
        title: "Designing Your Life: How to Build a Well-lived, Joyful Life",
        overview: "Whether we’re 20, 40, 60 or older, many of us are still looking for an answer to that perennial question, ‘What do you want to be when you grow up?’ In Designing Your Life, Silicon Valley design innovators Bill Burnett and Dave Evans use their expertise to help you work out what you want – and how to get it. <p> Their phenomenally successful Life Design course has been tried and tested by thousands of people, from students to mid-career professionals to retirees contemplating a whole new future. Now in book form for the first time, their simple method will teach you how to use basic design tools to create a life that will work for you. <p> Using real-life stories and proven techniques like reframing, prototyping and mind-mapping, you will learn how to build your way forwards, step-by-positive-step, to a life that’s better by a design of your own making. <p> Because a well-designed life means a life well-lived.",
        pages: "272",
        author: "Bill Burnett",
        release_date: "May 5, 2016",
        wikipedia: "Designing_Your_Life",
        poster: "img/designing_your_life.jpg",
        genre: ["Nonfiction", "Self Help", "Personal Development", "Business", "Psychology", "Design", "Productivity"]
    },
    {
        isbn: 9780805093032,
        title: "Dismantling the Empire: America's Last Best Hope",
        overview: "The author of the bestselling Blowback Trilogy reflects on America's waning power in a masterful collection of essays. <p> In his prophetic book \"Blowback,\" published before 9/11, Chalmers Johnson warned that our secret operations in Iraq and elsewhere around the globe would exact a price at home. Now, in a brilliant series of essays written over the last three years, Johnson measures that price and the resulting dangers America faces. Our reliance on Pentagon economics, a global empire of bases, and war without end is, he declares, nothing short of \"a suicide option.\" <p> \"Dismantling the Empire\" explores the subjects for which Johnson is now famous, from the origins of blowback to Barack Obama's Afghanistan conundrum, including our inept spies, our bad behavior in other countries, our ill-fought wars, and our capitulation to a military that has taken ever more control of the federal budget. There is, he proposes, only one way out: President Obama must begin to dismantle the empire before the Pentagon dismantles the American Dream. If we do not learn from the fates of past empires, he suggests, our decline and fall are foreordained. This is Johnson at his best: delivering both a warning and an urgent prescription for a remedy.",
        pages: "224",
        author: "Chalmers Johnson",
        release_date: "August 1, 2010",
        wikipedia: "Chalmers_Johnson",
        poster: "img/dismantling_the_empire.jpg",
        genre: ["Politics", "Nonfiction", "History", "War", "American", "Military Fiction", "Economics"]
    },
    {
        isbn: 9780060934347,
        title: "Don Quixote",
        overview: "Edith Grossman's definitive English translation of the Spanish masterpiece. Widely regarded as one of the funniest and most tragic books ever written, Don Quixote chronicles the adventures of the self-created knight-errant Don Quixote of La Mancha and his faithful squire, Sancho Panza, as they travel through sixteenth-century Spain. You haven't experienced Don Quixote in English until you've read this masterful translation.",
        pages: "940",
        author: "Miguel de Cervantes Saavedra",
        release_date: "January 1, 1605",
        wikipedia: "Don_Quixote",
        poster: "img/don_quixote.jpg",
        genre: ["Classics", "Fiction", "Literature", "Spanish Literature", "Adventure", "Historical Fiction", "Novels"]
    },
    {
        isbn: 9780451524935,
        title: "Don't Stand too close to a Naked Man",
        overview: "In Don’t Stand Too Close to a Naked Man, Tim Allen takes us through the rites of passage, from fixing up his banana-seat Stingray—which was fine until he decided to spray-paint it purple—to a discourse on the various “sugar food groups”. He ponders why parents believe that kids don’t want to eat the same thing every night, the nature of his mom’s cooking (“What is cubed steak, anyway?”), and fun with BB guns. He reveals his earliest moment of sexual awareness, which occurred when he saw his first Playboy pinup, and realized that every woman is naked underneath her clothes. <p> In the chapter “The Wonderful World of Guys”, Tim explains male behavior in all its glory, including how guys behave around their best friends’ girlfriends, guys at parties, and Things Men Never Want to Hear (“Gee, I’ve never seen one quite that misshapen”). He shows how to tell the difference between flirting and hitting on someone, and recalls his early dating experiences, as well as his first (rejected) marriage proposal to his wife. There are helpful tips for dealing with women, such as how to answer the question, “How do I look in this?” (Clue: Never comment on a woman’s derriere), on women’s accoutrements (“A woman will have sixty purses, and I still have the wallet I made in camp”), and on women’s magazines. He ponders such questions as why women are always “chilly”, when men are burning up; why men don’t mind being called pigs; why women can’t understand what men do in the garage all morning; and why the boats in bass fishing tournaments have to be so fast (“Are bass particularly fast little fish? Are Jim Bob and Sam Bob trying to run them down?”). <p> Tim reveals how he used comedy to extract himself from dangerous situations while he served time in prison. He discusses the impact upon his life of his father’s sudden death in a car accident, as well as other issues such as the value of monogamy in marriage, the creative forces inherent in all men, and his belief that men without women are violent, sad, uninspired, and one-sided. <p> There are hilarious meditations on everything from butt cracks to why men lie, to why women think they’re always right, to how to tell when a woman isn’t interested (Tip: these are not female courting clues: when she’d sucking her own elbow, scratching anyplace, or aadjusting her underpants)—all with Tim Allen’s trademark wit. It’s a world of supercharged hemis, fart-lighting, beef jerky, and ogling “Victoria’s Secret” catalogs.",
        pages: "210",
        author: "Tim Allen",
        release_date: "January 1, 1994",
        wikipedia: "Tim_Allen",
        poster: "img/dont_stand_too_close_to_a_naked_man.jpg",
        genre: ["Humor", "Nonfiction", "Biography", "Comedy", "Autobiography", "Memoir"]
    },
    {
        isbn: 9780307970381,
        title: "Drift: The Unmooring of American Military Power",
        overview: "\"One of my favorite ideas is, never to keep an unnecessary soldier,\" Thomas Jefferson wrote in 1792. Neither Jefferson nor the other Founders could ever have envisioned the modern national security state, with its tens of thousands of \"privateers\"; its bloated Department of Homeland Security; its rusting nuclear weapons, ill-maintained and difficult to dismantle; and its strange fascination with an unproven counterinsurgency doctrine. <p> Written with bracing wit and intelligence, Rachel Maddow's Drift argues that we've drifted away from America's original ideals and become a nation weirdly at peace with perpetual war, with all the financial and human costs that entails. To understand how we've arrived at such a dangerous place, Maddow takes us from the Vietnam War to today's war in Afghanistan, along the way exploring the disturbing rise of executive authority, the gradual outsourcing of our war-making capabilities to private companies, the plummeting percentage of American families whose children fight our constant wars for us, and even the changing fortunes of G.I. Joe. She offers up a fresh, unsparing appraisal of Reagan's radical presidency. Ultimately, she shows us just how much we stand to lose by allowing the priorities of the national security state to overpower our political discourse. <p> Sensible yet provocative, dead serious yet seriously funny, Drift will reinvigorate a \"loud and jangly\" political debate about how, when, and where to apply America's strength and power--and who gets to make those decisions.",
        pages: "288",
        author: "Rachel Maddow",
        release_date: "March 27, 2012",
        wikipedia: "Drift:_The_Unmooring_of_American_Military_Power",
        poster: "img/drift.jpg",
        genre: ["Nonfiction", "Politics", "History", "War", "Military Fiction", "American History"]
    },
    {
        isbn: 9780972018418,
        title: "Eating for Life: Your Guide to Great Health, Fat Loss and Increased Energy!",
        overview: "Did you truly enjoy the food you ate today? Do you really like the way you look and feel? Are you consistently enjoying great health and high energy? <p> Bill Phillips, author of the #1 New York Times bestseller Body-for-LIFE, believes your answer to all of the above questions should be, \"Yes!\" He feels that food should be a source of pure pleasure. A source of positive, abundant energy! A \"sure thing\" in a world of much uncertainty. <p> Phillips, who's widely regarded as today's most successful fitness author, has firm beliefs which go against the grain of today's popular weight-loss methods. \"Diets, all of them, are potentially dangerous, most always dumb and ultimately a dead-end street!\" he insists. \"Eventually, anyone and everyone who's at all concerned with their health must learn how to feed their body, not how to starve it.\" <p> Instead, Phillips encourages a safe and sound solution which includes eating balanced, nutrient-rich meals, frequently throughout the day. \"This is what works in the long run,\" he explains. <p> Rich with common sense and science, Eating for Life has rhyme and reason. It is specific. There are very clear dos and don'ts which help people enjoy food and improve their overall fitness. <p> Bill's approach, which he calls the \"Eating for Lifestyle,\" has already helped thousands of people break free from the dieting dilemma and discover that, contrary to pop-culture belief, food is friend, not foe. Used intelligently, it nourishes the body and mind, satisfies the appetite, calms cravings, renews health and lifts energy. <p> Like Bill Phillips' Body-for-LIFE, this is a tell-it-like-it-is book. There's no promise of a quick fix. No metabolic tricks or so-called miracles. Just straightforward, clear, concise, practical and appropriate principles for eating right... for life.",
        pages: "405",
        author: "Bill Phillips",
        release_date: "January 1, 2003",
        wikipedia: "Body_for_Life",
        poster: "img/eating_for_life.jpg",
        genre: ["Cookbooks", "Nonfiction", "Health", "Cooking", "Self Help", "Food", "Reference"]
    },
    {
        isbn: 9781611761672,
        title: "Eleven Rings: The Soul of Success",
        overview: "During his storied career as head coach of the Chicago Bulls and Los Angeles Lakers, Phil Jackson won more championships than any coach in the history of professional sports. Even more important, he succeeded in never wavering from coaching his way, from a place of deep values. Jackson was tagged as the “Zen master” half in jest by sportswriters, but the nickname speaks to an important truth: this is a coach who inspired, not goaded; who led by awakening and challenging the better angels of his players’ nature, not their egos, fear, or greed. <p> This is the story of a preacher’s kid from North Dakota who grew up to be one of the most innovative leaders of our time. In his quest to reinvent himself, Jackson explored everything from humanistic psychology and Native American philosophy to Zen meditation. In the process, he developed a new approach to leadership based on freedom, authenticity, and selfless teamwork that turned the hypercompetitive world of professional sports on its head. <p> In Eleven Rings, Jackson candidly describes how he: <p> Learned the secrets of mindfulness and team chemistry while playing for the champion New York Knicks in the 1970s <p> Managed Michael Jordan, the greatest player in the world, and got him to embrace selflessness, even if it meant losing a scoring title <p> Forged successful teams out of players of varying abilities by getting them to trust one another and perform in sync <p> Inspired Dennis Rodman and other “uncoachable” personalities to devote themselves to something larger than themselves <p> Transformed Kobe Bryant from a rebellious teenager into a mature leader of a championship team. <p> Eleven times, Jackson led his teams to the ultimate goal: the NBA championship—six times with the Chicago Bulls and five times with the Los Angeles Lakers. We all know the legendary stars on those teams, or think we do. What Eleven Rings shows us, however, is that when it comes to the most important lessons, we don’t know very much at all. This book is full of revelations: about fascinating personalities and their drive to win; about the wellsprings of motivation and competition at the highest levels; and about what it takes to bring out the best in ourselves and others.",
        pages: "386",
        author: "Phil Jackson",
        release_date: "May 21, 2013",
        wikipedia: "Phil_Jackson",
        poster: "img/eleven_rings.jpg",
        genre: ["Sports", "Nonfiction", "Biography", "Leadership", "Basketball", "Business", "Memoir"]
    },
    {
        isbn: 9780805083392,
        title: "Emotions Revealed: Recognizing Faces and Feelings to Improve Communication and Emotional Life",
        overview: "\"A tour de force. If you read this book, you'll never look at other people in quite the same way again.\"―Malcolm Gladwell <p> Renowned psychologist Paul Ekman explains the roots of our emotions―anger, fear, disgust, sadness, and happiness―and shows how they cascade across our faces, providing clear signals to those who can identify the clues. As featured in Malcolm Gladwell's bestseller Blink , Ekman's Facial Action Coding System offers intense training in recognizing feelings in spouses, children, colleagues, even strangers on the street. <p> In Emotions Revealed , Ekman distills decades of research into a practical, mind-opening, and life-changing guide to reading the emotions of those around us. He answers such questions How does our body signal to others whether we are slightly sad or anguished, peeved or enraged? Can we learn to distinguish between a polite smile and the genuine thing? Can we ever truly control our emotions? Packed with unique exercises and photographs, and a new chapter on emotions and lying that encompasses security and terrorism as well as gut decisions, Emotions Revealed is an indispensable resource for navigating our emotional world.",
        pages: "290",
        author: "Paul Ekman",
        release_date: "April 7, 2003",
        wikipedia: "Paul_Ekman",
        poster: "img/emotions_revealed.jpg",
        genre: ["Psychology", "Nonfiction", "Science", "Self Help", "Communication", "Emotion", "Personal Development"]
    },
    {
        isbn: 9781451617856,
        title: "EntreLeadership: 20 Years of Practical Business Wisdom from the Trenches",
        overview: "From the New York Times bestselling author of The Total Money Makeover and radio and podcast host Dave Ramsey comes an informative guide based on how he grew a successful, multimillion dollar company from a card table in his living room. <p> Your company is only as strong as your leaders. These are the men and women doing battle daily beneath the banner that is your brand. Are they courageous or indecisive? Are they serving a motivated team or managing employees? Are they valued? <p> Your team will never grow beyond you, so here’s another question to consider—are you growing? Whether you’re sitting at the CEO’s desk, the middle manager’s cubicle, or a card table in your living-room-based start-up, EntreLeadership provides the practical, step-by-step guidance to grow your business where you want it to go. Dave Ramsey opens up his championship playbook for business to show you how to: <p> -Inspire your team to take ownership and love what they do <p> -Unify your team and get rid of all gossip <p> -Handle money to set your business up for success <p> -Reach every goal you set <p> -And much, much more! <p> EntreLeadership is a one-stop guide filled with accessible advice for businesses and leaders to ensure success even through the toughest of times.",
        pages: "306",
        author: "Dave Ramsey",
        release_date: "September 20, 2011",
        wikipedia: "Dave_Ramsey",
        poster: "img/entreleadership.jpg",
        genre: ["Business", "Leadership", "Nonfiction", "Entrepreneurship", "Self Help", "Finance", "Personal Development"]
    },
    {
        isbn: 9781250067050,
        title: "Extreme Ownership: How U.S. Navy SEALs Lead and Win",
        overview: "The #1 New York Times bestseller Sent to the most violent battlefield in Iraq, Jocko Willink and Leif Babin’s SEAL task unit faced a seemingly impossible help U.S. forces secure Ramadi, a city deemed “all but lost.” In gripping firsthand accounts of heroism, tragic loss, and hard-won victories in SEAL Team Three’s Task Unit Bruiser, they learned that leadership―at every level―is the most important factor in whether a team succeeds or fails.Willink and Babin returned home from deployment and instituted SEAL leadership training that helped forge the next generation of SEAL leaders. After departing the SEAL Teams, they launched Echelon Front, a company that teaches these same leadership principles to businesses and organizations. From promising startups to Fortune 500 companies, Babin and Willink have helped scores of clients across a broad range of industries build their own high-performance teams and dominate their battlefields. Now, detailing the mind-set and principles that enable SEAL units to accomplish the most difficult missions in combat, Extreme Ownership shows how to apply them to any team, family or organization. Each chapter focuses on a specific topic such as Cover and Move, Decentralized Command, and Leading Up the Chain, explaining what they are, why they are important, and how to implement them in any leadership environment. A compelling narrative with powerful instruction and direct application, Extreme Ownership revolutionizes business management and challenges leaders everywhere to fulfill their ultimate lead and win.",
        pages: "320",
        author: "Jocko Willink, Leif Babin",
        release_date: "October 20, 2015",
        wikipedia: "Jocko_Willink",
        poster: "img/extreme_ownership.jpg",
        genre: ["Leadership", "Business", "Nonfiction", "Self Help", "Personal Development", "Management", "Military Fiction"]
    },
    {
        isbn: 9780345342966,
        title: "Fahrenheit 451",
        overview: "The system was simple. Everyone understood it. Books were for burning, along with the houses in which they were hidden. <p> Guy Montag was a fireman whose job it was to start fires. And he enjoyed his job. He had been a fireman for ten years, and he had never questioned the pleasure of the midnight runs or the joy of watching pages consumed by flames, never questioned anything until he met a seventeen-year-old girl who told him of a past when people were not afraid. Then Guy met a professor who told him of a future in which people could think. And Guy Montag suddenly realized what he had to do...",
        pages: "190",
        author: "Ray Bradbury",
        release_date: "October 19, 1953",
        wikipedia: "Fahrenheit_451",
        poster: "img/fahrenheit_451.jpg",
        genre: ["Classics", "Fiction", "Science Fiction", "Dystopia", "Literature", "Novels"]
    },
    {
        isbn: 9781250196590,
        title: "Fair Shot: Rethinking Inequality and How We Earn",
        overview: "Facebook co-founder Chris Hughes argues that the best way to fight income inequality is with a radically simple idea: a guaranteed income for working people, paid for by the one percent. <p> The first half of Chris Hughes’s life played like a movie reel right out of the “American Dream.” He grew up in a small town in North Carolina. His parents were people of modest means, but he was accepted into an elite boarding school and then Harvard, both on scholarship. There, he met Mark Zuckerberg and Dustin Moskovitz and became one of the co-founders of Facebook. <p> In telling his story, Hughes demonstrates the powerful role fortune and luck play in today’s economy. Through the rocket ship rise of Facebook, Hughes came to understand how a select few can become ultra-wealthy nearly overnight. He believes the same forces that made Facebook possible have made it harder for everyone else in America to make ends meet. <p> To help people who are struggling, Hughes proposes a simple, bold solution: a guaranteed income for working people, including unpaid caregivers and students, paid for by the one percent. The way Hughes sees it, a guaranteed income is the most powerful tool we have to combat poverty and stabilize America’s middle class. Money—cold hard cash with no strings attached—gives people freedom, dignity, and the ability to climb the economic ladder. A guaranteed income for working people is the big idea that's missing in the national conversation. <p> This book, grounded in Hughes’s personal experience, will start a frank conversation about how we earn in modern America, how we can combat income inequality, and ultimately, how we can give everyone a fair shot.",
        pages: "224",
        author: "Chris Hughes",
        release_date: "January 1, 2018",
        wikipedia: "Chris_Hughes",
        poster: "img/fair_shot.jpg",
        genre: ["Economics", "Nonfiction", "Politics", "Business", "Poverty", "Technology", "Social Justice"]
    },
    {
        isbn: 9780060838584,
        title: "Fast Food Nation: The Dark Side of the All-American Meal",
        overview: "Fast food has hastened the malling of our landscape, widened the chasm between rich and poor, fueled an epidemic of obesity, and propelled American cultural imperialism abroad. That's a lengthy list of charges, but here Eric Schlosser makes them stick with an artful mix of first-rate reportage, wry wit, and careful reasoning. <p> Schlosser's myth-shattering survey stretches from California's subdivisions where the business was born to the industrial corridor along the New Jersey Turnpike where many fast food's flavors are concocted. Along the way, he unearths a trove of fascinating, unsettling truths -- from the unholy alliance between fast food and Hollywood to the seismic changes the industry has wrought in food production, popular culture, and even real estate.",
        pages: "383",
        author: "Eric Schlosser",
        release_date: "January 17, 2001",
        wikipedia: "Fast_Food_Nation",
        poster: "img/fast_food_nation.jpg",
        genre: ["Nonfiction", "Food", "Health", "Sociology", "Politics", "History", "Science"]
    },
    {
        isbn: 9780007204496,
        title: "Fear and Loathing in Las Vegas",
        overview: "'We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like, \"I feel a bit lightheaded; maybe you should drive ...\"' Hunter S. Thompson is roaring down the desert highway to Las Vegas with his attorney, the Samoan, to find the dark side of the American Dream. Armed with a drug arsenal of stupendous proportions, the duo engage in a surreal succession of chemically enhanced confrontations with casino operators, police officers and assorted Middle Americans. This stylish reissue of Hunter S. Thompson's iconic masterpiece, a controversial bestseller when it appeared in 1971, features the brilliant Ralph Steadman illustrations of the original. It brings to a new generation the hallucinatory humour and nightmare terror of Hunter S. Thompson's musings on the collapse of the American Dream.",
        pages: "230",
        author: "Hunter S. Thompson",
        release_date: "July 7, 1971",
        wikipedia: "Fear_and_Loathing_in_Las_Vegas",
        poster: "img/fear_and_loathing_in_las_vegas.jpg",
        genre: ["Fiction", "Classics", "Humor", "Journalism", "Novels", "Literature", "American"]
    },
    {
        isbn: 9781612130293,
        title: "Fifty Shades of Grey",
        overview: "When literature student Anastasia Steele goes to interview young entrepreneur Christian Grey, she encounters a man who is beautiful, brilliant, and intimidating. The unworldly, innocent Ana is startled to realize she wants this man and, despite his enigmatic reserve, finds she is desperate to get close to him. Unable to resist Ana’s quiet beauty, wit, and independent spirit, Grey admits he wants her, too—but on his own terms. <p> Shocked yet thrilled by Grey’s singular erotic tastes, Ana hesitates. For all the trappings of success—his multinational businesses, his vast wealth, his loving family—Grey is a man tormented by demons and consumed by the need to control. When the couple embarks on a daring, passionately physical affair, Ana discovers Christian Grey’s secrets and explores her own dark desires. <p> Erotic, amusing, and deeply moving, the Fifty Shades Trilogy is a tale that will obsess you, possess you, and stay with you forever.",
        pages: "356",
        author: "E.L. James",
        release_date: "May 25, 2011",
        wikipedia: "Fifty_Shades_of_Grey",
        poster: "img/fifty_shades_of_grey.jpg",
        genre: ["Romance", "Fiction", "Erotica", "Adult", "BDSM", "Contemporary"]
    },
    {
        isbn: 9781524853778,
        title: "Film for Her",
        overview: "Film for Her is a story book of people, places, and memories captured on film. Through photographs, poetry, prose, and a short story, Orion Carloto invites readers to remember the forgotten and reach into the past, find comfort in the present, and make sense of the intangible future. Film photography isn’t just eye candy; it’s timeless and romantic—the ideal complement to Carloto’s writing. In Film for Her , much like a visual diary, word and image are intertwined in a book perfect for both gift and self-purchase.",
        pages: "192",
        author: "Orion Carloto",
        release_date: "November 17, 2020",
        wikipedia: "",
        poster: "img/film_for_her.jpg",
        genre: ["Poetry", "Nonfiction", "Art", "Photography", "Memoir", "Contemporary", "Short Stories"]
    },
    {
        isbn: 9780553803716,
        title: "Foundation",
        overview: "The first novel in Isaac Asimov's classic science-fiction masterpiece, the Foundation series <p> For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future--to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save humankind, Seldon gathers the best minds in the Empire--both scientists and scholars--and brings them to a bleak planet at the edge of the galaxy to serve as a beacon of hope for future generations. He calls his sanctuary the Foundation.",
        pages: "244",
        author: "Isaac Asimov",
        release_date: "August 30, 1951",
        wikipedia: "Foundation_(Asimov_novel)",
        poster: "img/foundation.jpg",
        genre: ["Science Fiction", "Fiction", "Classics", "Fantasy", "Novels"]
    },
    {
        isbn: 9780140280555,
        title: "Galileo's Daughter: A Historical Memoir of Science, Faith and Love",
        overview: "Dramatically recolors the personality and accomplishment of a mythic figure whose seventeenth-century clash with Catholic doctrine continues to define the schism between science and religion. <p> Inspired by a long fascination with Galileo, and by the remarkable surviving letters of Galileo's daughter, a cloistered nun, Dava Sobel has written a biography unlike any other of the man Albert Einstein called \"the father of modern physics--indeed of modern science altogether.\" Galileo's Daughter also presents a stunning portrait of a person hitherto lost to history, described by her father as \"a woman of exquisite mind, singular goodness, and most tenderly attached to me.\" <p> The son of a musician, Galileo Gahlei (1564-1642) tried at first to enter a monastery before engaging the skills that made him the foremost scientist of his day. Though he never left Italy, his inventions and discoveries were heralded around the world. Most sensationally, his telescopes allowed him to reveal a new reality in the heavens and to reinforce the astounding argument that the Earth moves around the Sun. For this belief, he was brought before the Holy Office of the Inquisition, accused of heresy, and forced to spend his last years under house arrest. <p> Of Galileo's three illegitimate children, the eldest best mirrored his own brilliance, industry, and sensibility, and by virtue of these qualities became his confidante. Born Virginia in 1600, she was thirteen when Galileo placed her in a convent near him in Florence, where she took the most appropriate name of Suor Maria Celeste. Her loving support, which Galileo repaid in kind, proved to be her father's greatest source of strength throughout his most productive and tumultuous years. Her presence, through letters which Sobel has translated from their original Italian and masterfully woven into the narrative, graces her father's life now as it did then. <p> Galileo's Daughter dramatically recolors the personality and accomplishment of a mythic figure whose seventeenth-century clash with Catholic doctrine continues to define the schism between science and religion. Moving between Galileo's grand public life and Maria Celeste's sequestered world, Sobel illuminates the Florence of the Medicis and the papal court in Rome during the pivotal era when humanity's perception of its place in the cosmos was being overturned. In that same time, while the bubonic plague wreaked its terrible devastation and the Thirty Years' War tipped fortunes across Europe, one man sought to reconcile the Heaven he revered as a good Catholic with the heavens he revealed through his telescope. <p> With all the human drama and scientific adventure that distinguished Longitude, Galileo's Daughter is an unforgettable story.",
        pages: "420",
        author: "Dava Sobel",
        release_date: "October 1, 1999",
        wikipedia: "Galileo%27s_Daughter",
        poster: "img/galileos_daughter.jpg",
        genre: ["History", "Nonfiction", "Science", "Biography", "Memoir"]
    },
    {
        isbn: 9780528881343,
        title: "Gambling Secrets of Nick the Greek",
        overview: "In 1919 Nick Dandolos arrived in Chicago from Greece, pursuing the American dream. Instead, tempted into a high-stakes game of cards, he is driven to humiliation and defeat. From these depths he begins his painstaking mastery of the skills of gambling under the tutelage of the crafty old gambler, Nestor, who says, \"If God wished to learn to gamble, he would come to me.\"Wreaking vengeance on the powerful gangsters who had beaten him, Nick begins a meteoric ascent that carries him through no-limit games with kings and tycoons, and, finally, gains for himself legendary status as \"Nick the Greek.\"",
        pages: "251",
        author: "Ted Thackrey Jr.",
        release_date: "August 1, 1968",
        wikipedia: "Nick_Dandolos",
        poster: "img/gambling_secrets_of_nick_the_greek.jpg",
        genre: ["Gambling"]
    },
    {
        isbn: 9780345410030,
        title: "Games People Play",
        overview: "Dr. Eric Berne, as the originator of transactional analysis, has attained recognition for developing one of the most innovative approaches to modern psychotherapy. Discover how many of these \"secret games\" you play everyday of your life: Iwfy (If it weren't for you); Sweetheart; Threadbare; Harried; Alcoholic, and many more. A groundbreaking book that bores deep into the heart of all our relationships, GAMES PEOPLE PLAY is a classic that should be read again and again.",
        pages: "216",
        author: "Eric Berne",
        release_date: "January 1, 1964",
        wikipedia: "Games_People_Play_(book)",
        poster: "img/games_people_play.jpg",
        genre: ["Psychology", "Nonfiction", "Self Help", "Science", "Philosophy", "Relationships", "Sociology"]
    },
    {
        isbn: 9780142003442,
        title: "Good Poems",
        overview: "A selection of meaningful and enjoyable poems to inspire and be enjoyed by everyone <p> Here is an anthology of poems, chosen by Garrison Keillor for their wit, their frankness, their passion, their \"utter clarity in the face of everything else a person has to deal with at 7 a.m.\" <p> Good Poems includes verse organized by theme about lovers, children, failure, everyday life, death, and transcendance. It features the work of classic poets, such as Emily Dickinson, Walt Whitman, and Robert Frost, as well as the work of contemporary greats such as Howard Nemerov, Charles Bukowski, Donald Hall, Billy Collins, Robert Bly, and Sharon Olds. It's a book of poems for anybody who loves poetry whether they know it or not.",
        pages: "476",
        author: "Garrison Keillor",
        release_date: "August 21, 2002",
        wikipedia: "Garrison_Keillor",
        poster: "img/good_poems.jpg",
        genre: ["Poetry", "Fiction", "Anthologies", "Literature", "American"]
    },
    {
        isbn: 9780451524935,
        title: "Good Poems for Hard Times",
        overview: "Chosen by Garison Keillor for his readings on public radio's The Writer's Almanac, the 185 poems in this follow-up to his acclaimed anthology Good Poems are perfect for our troubled times. Here, readers will find solace in works that are bracing and courageous, organized into such resonant headings as \"Such As It Is More or Less\" and \"Let It Spill.\" From William Shakespeare and Walt Whitman to R. S. Gwynn and Jennifer Michael Hecht, the voices gathered in this collection will be more than welcome to those who've been struck by bad news, who are burdened by stress, or who simply appreciate the power of good poetry.",
        pages: "344",
        author: "Garrison Keillor",
        release_date: "January 1, 2005",
        wikipedia: "Garrison_Keillor",
        poster: "img/good_poems_for_hard_times.jpg",
        genre: ["Poetry", "Fiction", "Anthologies", "Literature", "American"]
    },
    {
        isbn: 9780312242992,
        title: "Got Your Back: Protecting Tupac in the World of Gangsta Rap",
        overview: "On September 13, 1996, Tupac Shakur was shot and killed in Las Vegas. Millions of fans wept, while many critics claimed it was the inevitable result of a thugged-out lifestyle. The mystery surrounding the shooting-a suspect has yet to be named-has increased, and rumors of gang wars, disloyalty, and government conspiracies continue to linger. Only Frank Alexander, Tupac's bodyguard druing the last year of his life, knows the real story. <p> Got Your Back details the exploits of one of the most famous rappers of all time. The drugs, the women, the violence, the money-all provided fuel to the fire that was Tupac's life. As his platinum-selling, posthumously released albums prove, Tupac lives on through his music. Complete with exclusive new interview material with Tupac's mother, Afeni, Got Your Back provides an insider's view of a life gone awry.",
        pages: "240",
        author: "Frank Alexander, Heidi Siegmund Cuda",
        release_date: "April 1, 1998",
        wikipedia: "",
        poster: "img/got_your_back.jpg",
        genre: ["Music", "Biography", "Nonfiction"]
    },
    {
        isbn: 9780451406811,
        title: "Gotti: Rise and Fall",
        overview: "He was the most famous and infamous mobster since Al the handsome, expensively groomed Godfather who beat rap after rap to become a folk hero to the masses and a nightmare to the forces of law and order. He was also a vicious killer, a ruthless manipulator, a Machiavellian master of intrigue and double cross, and an ardent womanizer, whose rise to the head of America’s most powerful crime family was marked by corpses, lies, and betrayals. <p> By using FBI tapes and a host of sources on both sides of the law, star organized crime reporters Jerry Capeci and Gene Mustain tell the whole, true, uncensored story of John Gotti. With scores of fearfully fascinating characters, brutal vignettes of life and death inside the Cosa Nostra, tense courtroom dramas, and ominous answers to the question of how much power Gotti still wields, this is a great gangster story and the definitive account of John Gotti’s rise and fall.",
        pages: "464",
        author: "Jerry Capeci, Gene Mustain",
        release_date: "June 1, 1996",
        wikipedia: "John_Gotti",
        poster: "img/gotti_rise_and_fall.jpg",
        genre: ["True Crime", "Crime", "Biography", "Nonfiction", "History"]
    },
    {
        isbn: 9780593139134,
        title: "Greenlights",
        overview: "From the Academy Award®–winning actor, an unconventional memoir filled with raucous stories, outlaw wisdom, and lessons learned the hard way about living with greater satisfaction. <p> I’ve been in this life for fifty years, been trying to work out its riddle for forty-two, and been keeping diaries of clues to that riddle for the last thirty-five. Notes about successes and failures, joys and sorrows, things that made me marvel, and things that made me laugh out loud. How to be fair. How to have less stress. How to have fun. How to hurt people less. How to get hurt less. How to be a good man. How to have meaning in life. How to be more me. <p> Recently, I worked up the courage to sit down with those diaries. I found stories I experienced, lessons I learned and forgot, poems, prayers, prescriptions, beliefs about what matters, some great photographs, and a whole bunch of bumper stickers. I found a reliable theme, an approach to living that gave me more satisfaction, at the time, and still: If you know how, and when, to deal with life’s challenges - how to get relative with the inevitable - you can enjoy a state of success I call “catching greenlights.” <p> So I took a one-way ticket to the desert and wrote this book: an album, a record, a story of my life so far. This is fifty years of my sights and seens, felts and figured-outs, cools and shamefuls. Graces, truths, and beauties of brutality. Getting away withs, getting caughts, and getting wets while trying to dance between the raindrops. <p> Hopefully, it’s medicine that tastes good, a couple of aspirin instead of the infirmary, a spaceship to Mars without needing your pilot’s license, going to church without having to be born again, and laughing through the tears. <p> It’s a love letter. To life. <p> It’s also a guide to catching more greenlights - and to realizing that the yellows and reds eventually turn green too. <p> Good luck.",
        pages: "289",
        author: "Matthew McConaughey",
        release_date: "October 20, 2020",
        wikipedia: "Greenlights_(book)",
        poster: "img/greenlights.jpg",
        genre: ["Nonfiction", "Memoir", "Biography", "Autobiography", "Self Help"]
    },
    {
        isbn: 9780739467350,
        title: "Guns, Germs, and Steel: The Fates of Human Societies",
        overview: "\"Diamond has written a book of remarkable scope ... one of the most important and readable works on the human past published in recent years.\" <p> Winner of the Pulitzer Prize and a national bestseller: the global account of the rise of civilization that is also a stunning refutation of ideas of human development based on race. <p> In this \"artful, informative, and delightful\" (William H. McNeill, New York Review of Books) book, Jared Diamond convincingly argues that geographical and environmental factors shaped the modern world. Societies that had a head start in food production advanced beyond the hunter-gatherer stage, and then developed writing, technology, government, and organized religion—as well as nasty germs and potent weapons of war—and adventured on sea and land to conquer and decimate preliterate cultures. A major advance in our understanding of human societies, Guns, Germs, and Steel chronicles the way that the modern world came to be and stunningly dismantles racially based theories of human history. <p> Winner of the Pulitzer Prize, the Phi Beta Kappa Award in Science, the Rhone-Poulenc Prize, and the Commonwealth Club of California's Gold Medal",
        pages: "498",
        author: "Jared Diamond",
        release_date: "May 9, 1997",
        wikipedia: "Guns,_Germs,_and_Steel",
        poster: "img/guns_germs_and_steel.jpg",
        genre: ["History", "Nonfiction", "Science", "Anthropology", "Sociology", "Politics", "Economics"]
    },
    {
        isbn: 9780385491341,
        title: "Have Gun Will Travel",
        overview: "Death Row Records is one of the most successful music labels of all time.  From its inception in 1992, it exploded on the rap music scene with sales climbing to the $125 million mark in just four years.  Even more noticeable than the label's financial success is the effect it had on American youth culture, making gangsta rap more popular with suburban white youth and MTV viewers than traditional rock groups.  But under the guidance of six-foot-four-inch, 300-pound CEO Marion \"Suge\" Knight, Death Row also became the most controversial record label in history--a place where violence, gang feuds, threats, intimidation, and brushes with death were business as usual. <p> Have Gun Will Travel details the spectacular rise and violent fall of a music label that had at its heart a ferocious criminal enterprise cloaked behind corporate facades that gave it a guise of legitimacy.  With inside access no other writer can claim, Ronin Ro, the country's preeminent rap journalist, exposes the facts everyone else is afraid to divulge--from the initial bankrolling of Death Row by a leader of L.A.'s notorious Bloods gang, to links with New York's Genovese crime family.   Have Gun Will Travel lays bare the full story behind this influential label, including the still-unsolved murders of Tupac Shakur and the Notorious B.I.G., as well as Suge Knight's rise to power, his fight with East Coast rap titans such as Sean \"Puffy\" Combs, and his eventual imprisonment. <p> Although it has been all over the news--from The Wall Street Journal to Rolling Stone --this is a timeless story about an empire built on greed, corruption, murder, and exploitation.  With exclusive interviews and bloodcurdling eyewitness accounts, Have Gun Will Travel combines the behind-the-scenes fascination of books like Hit Men and Hit and Run with the violence and dramatic sweep of The Godfather, in a brilliant and blistering document of contemporary culture.",
        pages: "384",
        author: "Ronin Ro",
        release_date: "February 17, 1998",
        wikipedia: "Death_Row_Records",
        poster: "img/have_gun_will_travel.jpg",
        genre: ["Music", "Nonfiction", "Hip Hop", "Biography", "History", "True Crime", "Crime"]
    },
    {
        isbn: 9780060784560,
        title: "He Comes Next: The Thinking Woman's Guide to Pleasuring a Man",
        overview: "In the smash hit She Comes First, Ian Kerner singlehandedly waged battle against male sexual \"ill-cliteracy,\" and women everywhere benefited from his \"viva la vulva\" philosophy of female pleasure. Now, in Passionista, it's time to learn all about what turns men onand makes them stay on. In this point-by-point, \"blow-by-blow\" guide, Kerner makes giving as much fun as receiving as he covers every angle of male sexuality, unlocks the secrets of satisfaction, and offers knowledgeable answers to the questions every woman wonders about. His advice is the closest you'll ever come to waking up in a guy's skin and knowing what truly makes him sexually tick. <p> Written in the same witty, insightful, and utterly readable voice that has made She Comes First and Be Honest so popular, Passionista is the empowered woman's guide to enjoying sex to the fullest",
        pages: "240",
        author: "Ian Kerner",
        release_date: "January 1, 2006",
        wikipedia: "Ian_Kerner",
        poster: "img/he_comes_next.jpg",
        genre: ["Nonfiction", "Sexuality", "Self Help", "Relationships", "Health", "Reference", "Education"]
    },
    {
        isbn: 9780063070745,
        title: "Hear Yourself: How to Find Peace in a Noisy World",
        overview: "New York Times Bestseller “Rawat’s deep wisdom is a breath of fresh air; Hear Yourself gives the gift of peace and gratitude in a time we sorely need it.”—Ian Morgan Cron, author of The Story of You and co-author of The Road Back to You “ Hear Yourself i nvites us to take a journey from the outside world we live in everyday to the world of peace within us. I highly recommend this inspiring book to anyone ready to take that journey.”—Bill McCarthy, Founder and President of The Unity Foundation The renowned teacher and author of the internationally bestselling Peace Is Possible shows us how to quiet the noise of our busy lives to hear our own unique authentic voice—the source of peace. The cacophony of modern life can be deafening, leaving us feeling frazzled and uneasy. In this warm, wise book, Prem Rawat teaches us how to turn down the noise to “hear ourselves”—to listen to the subtle song of peace that sings inside each of us. Once we learn to truly “hear ourselves” and the voice of peace within, then we can hold on to that as we face all the noise of the world. The culmination of a lifetime of study, Hear Yourself lays out the crucial steps we can use to focus on the voice within. Take a walk in nature and listen for the sounds of harmony, Prem Rawat suggests, or set aside a few minutes each day to feel gratitude, which comes from the core of our being. He challenges us to embrace our thirst for peace and let go of expectations for how it should feel. With one straightforward yet deeply profound question, he helps us to focus—to be present: Am I conscious of where I am today and what I want to experience in this world?”  If we allow ourselves to listen, what we hear is the extraordinary miracle of existence—an experience that transforms our relationship to life and everything in it. Packed with powerful insights and compelling stories, Hear Yourself i ntroduces readers to an ancient line of practical wisdom that enlightens us to a simple way to listen. By doing so, Prem Rawat reveals, we can “profoundly change our understanding of ourselves, those around us, and our lives.”",
        pages: "272",
        author: "Prem Rawat",
        release_date: "September 14, 2021",
        wikipedia: "Prem_Rawat",
        poster: "img/hear_yourself.jpg",
        genre: ["Nonfiction", "Self Help", "Personal Development", "Psychology"]
    },
    {
        isbn: 9780974037004,
        title: "Help Wanted: Recruiting, Hiring & Retaining Exceptional Staff",
        overview: "",
        pages: "186",
        author: "Dwayne J. Clark",
        release_date: "November 1, 2001",
        wikipedia: "",
        poster: "img/help_wanted.jpg",
        genre: ["Business"]
    },
    {
        isbn: 9780679721031,
        title: "Hiroshima",
        overview: "On August 6, 1945, Hiroshima was destroyed by the first atom bomb ever dropped on a city. This book, John Hersey's journalistic masterpiece, tells what happened on that day. Told through the memories of survivors, this timeless, powerful and compassionate document has become a classic \"that stirs the conscience of humanity.\"",
        pages: "152",
        author: "John Hersey",
        release_date: "January 1, 1946",
        wikipedia: "Hiroshima_(book)",
        poster: "img/hiroshima.jpg",
        genre: ["History", "Nonfiction", "War", "Classics", "Japan", "World War II"]
    },
    {
        isbn: 9780393320350,
        title: "Hitler: 1889-1936 Hubris",
        overview: "From his illegitimate birth in a small Austrian village to his fiery death in a bunker under the Reich chancellery in Berlin, Adolf Hitler left a murky trail, strewn with contradictory tales & overgrown with self-created myths. One truth prevails: the sheer scale of the evils that he unleashed on the world has made him a demonic figure without equal in this century. Kershaw's Hitler brings us closer than ever before to the character of the bizarre misfit in his 30-year ascent from a Viennese shelter for the indigent to uncontested rule over the German nation that had tried & rejected democracy in the crippling aftermath of WWI. With extraordinary vividness, Kershaw recreates the settings that made Hitler's rise possible: the virulent anti-Semitism of prewar Vienna, the crucible of a war with immense casualties, the toxic nationalism that gripped Bavaria in the 20s, the undermining of the Weimar Republic by extremists of the Right & the Left, the hysteria that accompanied Hitler's seizure of power in 1933 & then mounted in brutal attacks by his storm troopers on Jews & others condemned as enemies of the Aryan race. In an account drawing on many previously untapped sources, Hitler metamorphoses from an obscure fantasist, a drummer sounding an insistent beat of hatred in Munich beer halls, to the instigator of an infamous failed putsch &, ultimately, to the leadership of a ragtag alliance of right-wing parties fused into a movement that enthralled the German people. This volume, 1st of two, ends with the promulgation of the infamous Nuremberg laws that pushed German Jews to the outer fringes of society, & with the march of the German army into the Rhineland, Hitler's initial move toward the abyss of war.",
        pages: "912",
        author: "Ian Kershaw",
        release_date: "January 1, 1998",
        wikipedia: "Ian_Kershaw",
        poster: "img/hitler_hubris.jpg",
        genre: ["History", "Biography", "Nonfiction", "World War II", "Germany", "War", "European History"]
    },
    {
        isbn: 9780451524935,
        title: "Holy Bible: The New King James Version",
        overview: "The Bible is a collection of 66 ancient books that have shaped laws, influenced culture, and inspired billions to faith over three millennia. It is divided into two parts, the Old Testament and the New Testament. The Old Testament is a historical record of God's people, laws, sayings, and promises that function as a model for moral living and conduct. The New Testament is a collection of 66 smaller documents, called \"books,\" that have shaped laws, influenced culture, and inspired billions to faith over three millennia.1 The Bible aims to restore Heaven and Earth and bring them together through Jesus.",
        pages: "1172",
        author: "Anonymous",
        release_date: "January 1, 200",
        wikipedia: "New_King_James_Version",
        poster: "img/holy_bible.jpg",
        genre: ["Religion", "Christian", "Nonfiction", "Reference", "Christianity", "Theology", "Classics"]
    },
    {
        isbn: 9780375703768,
        title: "House of Leaves",
        overview: "A young family moves into a small home on Ash Tree Lane where they discover something is terribly wrong: their house is bigger on the inside than it is on the outside. <p> Of course, neither Pulitzer Prize-winning photojournalist Will Navidson nor his companion Karen Green was prepared to face the consequences of that impossibility, until the day their two little children wandered off and their voices eerily began to return another story—of creature darkness, of an ever-growing abyss behind a closet door, and of that unholy growl which soon enough would tear through their walls and consume all their dreams.",
        pages: "709",
        author: "Mark Z. Danielewski",
        release_date: "May 7, 2000",
        wikipedia: "House_of_Leaves",
        poster: "img/house_of_leaves.jpg",
        genre: ["Horror", "Fiction", "Fantasy", "Mystery", "Thriller", "Contemporary", "Novels"]
    },
    {
        isbn: 9781936365531,
        title: "How Music Works",
        overview: "How Music Works is David Byrne’s remarkable and buoyant celebration of a subject he has spent a lifetime thinking about. In it he explores how profoundly music is shaped by its time and place, and he explains how the advent of recording technology in the twentieth century forever changed our relationship to playing, performing, and listening to music. <p> Acting as historian and anthropologist, raconteur and social scientist, he searches for patterns—and shows how those patterns have affected his own work over the years with Talking Heads and his many collaborators, from Brian Eno to Caetano Veloso. Byrne sees music as part of a larger, almost Darwinian pattern of adaptations and responses to its cultural and physical context. His range is panoptic, taking us from Wagnerian opera houses to African villages, from his earliest high school reel-to-reel recordings to his latest work in a home music studio (and all the big studios in between). <p> Touching on the joy, the physics, and even the business of making music, How Music Works is a brainy, irresistible adventure and an impassioned argument about music’s liberating, life-affirming power.",
        pages: "345",
        author: "David Byrne",
        release_date: "September 2, 2014",
        wikipedia: "How_Music_Works",
        poster: "img/how_music_works.jpg",
        genre: ["Music", "Nonfiction", "History", "Art", "Biography", "Science"]
    },
    {
        isbn: 9780306903496,
        title: "How to American: An Immigrant's Guide to Disappointing Your Parents",
        overview: "Standup comic, actor and fan favorite from HBO's Silicon Valley and the film Crazy Rich Asians shares his memoir of growing up as a Chinese immigrant in California and making it in Hollywood. <p> \"I turned down a job in finance to pursue a career in stand-up comedy. My dad thought I was crazy. But I figured it was better to disappoint my parents for a few years than to disappoint myself for the rest of my life. I had to disappoint them in order to pursue what I loved. That was the only way to have my Chinese turnip cake and eat an American apple pie too.\" <p> Jimmy O. Yang is a standup comedian, film and TV actor and fan favorite as the character Jian Yang from the popular HBO series Silicon Valley. In How to American, he shares his story of growing up as a Chinese immigrant who pursued a Hollywood career against the wishes of his Yang arrived in Los Angeles from Hong Kong at age 13, learned English by watching BET RapCity for three hours a day, and worked as a strip club DJ while pursuing his comedy career. He chronicles a near deportation episode during a college trip Tijuana to finally becoming a proud US citizen ten years later. Featuring those and many other hilarious stories, while sharing some hard-earned lessons, How to American mocks stereotypes while offering tongue in cheek advice on pursuing the American dreams of fame, fortune, and strippers.",
        pages: "240",
        author: "Jimmy O. Yang",
        release_date: "March 13, 2018",
        wikipedia: "Jimmy_O._Yang",
        poster: "img/how_to_american.jpg",
        genre: ["Nonfiction", "Memoir", "Humor", "Biography", "Comedy", "Autobiography"]
    },
    {
        isbn: 9781558535961,
        title: "How to Be a Gentleman: A Contemporary Guide to Common Courtesy",
        overview: "Offers advice on traditional etiquette, such as how to order a bottle of wine, as well as modern points of etiquette, such as how to respond to voice mail and the use of cellular phones",
        pages: "150",
        author: "John Bridges",
        release_date: "January 1, 1998",
        wikipedia: "",
        poster: "img/how_to_be_a_gentleman.jpg",
        genre: ["Nonfiction", "Self Help", "Reference", "Personal Development", "How To", "Cultural", "Business"]
    },
    {
        isbn: 9789918950973,
        title: "How to Become a People Magnet: 62 Simple Strategies to build powerful relationships and positively impact the lives of everyone you get in touch with",
        overview: "Improve your people skills with these simple habits. <p> Do you feel awkward when you are around people? You don't really know what to say or how to start a conversation on a Networking event? Having problems with your boss or employees and don't know how to convince them to follow your lead? Do you want to improve your relationships with your spouse, confidants, or friends? <p> In his book How to Become a People Magnet international bestselling author Marc Reklau reveals the secrets and psychology behind successful relationships with other people. Your success and happiness in life - at home and in business -, to a great extent, depend on how you get along with other people. Are you able to influence and persuade them? Although success can mean something different for each person, there is one common denominator : other people. <p> The most successful people , quite often, aren't the ones with superior intelligence or the best skills, and the happiest people most times aren't smarter than we are, yet they are the ones who have the greatest people skills . In this practical and straightforward guide, you will learn specific principles that will help you to build more powerful relationships, stronger connections, and leave a positive, lasting impression on everyone you get in touch with. Most of them are common sense, but it's always good to have a reminder, because as they say, \"Common sense is the least common of all senses.\" <p> You will ...and much more... <p> Good skills with people many times make the difference between losing your job or getting a promotion; between making the sale or losing it ; between excellent customer service and being expandable as a supplier; between being THE ONE or just a friend ; between a smile and an angry look. <p> Once again, it's small changes that will cause big results . Becoming a people magnet is easier than you thought. Apply the advice of this book, and your life will never be the same. The benefits are countless, and the results will show anywhere people are involved.",
        pages: "158",
        author: "Marc Reklau",
        release_date: "October 25, 2018",
        wikipedia: "",
        poster: "img/how_to_become_a_people_magnet.jpg",
        genre: ["Communication", "Self Help", "Nonfiction", "Personal Development", "Psychology", "Business", "Leadership"]
    },
    {
        isbn: 9780761125952,
        title: "How to Connect in Business in 90 Seconds or Less",
        overview: "In business, we can't make a living selling to our friends. We don't have the luxury of choosing our colleagues or our managers, our clients or counterparts in other companies. So learning how to establish rapport with all sorts of people is crucial, which is what Nicholas Boothman teaches, simply yet powerfully, in his step-by-step program. <p> It begins with the ABCs of Neuro-Linguistic Programming—Attitude; Body Languge, including how to synchronize with another person; and Congruence, where communication is coordinated both in what we say and how we say it. Then Boothman describes the four key business personalities—Dreamers, Persuaders, Controllers, Analysts—and how to communicate with each one. He shows how to nail down the Big Idea in a 10-second presentation, how to be a schmoozer instead of a dry fact-talker, and how to establish credibility and authority right out of the gate. Filled with skills, techniques, and creative exercises to help make the most of every type of encounter and relationhip, this book is a direct connection to success.",
        pages: "256",
        author: "Nicholas Boothman",
        release_date: "June 8, 2002",
        wikipedia: "Nicholas_Boothman",
        poster: "img/how_to_connect_in_business_in_90_seconds_or_less.jpg",
        genre: ["Business", "Nonfiction", "Self Help", "Psychology", "Personal Development", "Leadership", "Communication"]
    },
    {
        isbn: 9780060539092,
        title: "How to Make Love Like a Porn Star: A Cautionary Tale",
        overview: "Jenna Jameson's unforgettable memoir is many things at once: a shocking sexual history; an insider's guide to the secret workings of the billion-dollar adult-film industry; and a gripping thriller that probes deep into Jameson's dark past. With never-before-seen photographs from Jenna's private collection, exclusive photos taken for this book, and original cartoon strips, this memoir is an unparalleled exploration of sexual freedom.",
        pages: "592",
        author: "Jenna Jameson, Neil Strauss",
        release_date: "September 1, 2004",
        wikipedia: "How_to_Make_Love_Like_a_Porn_Star",
        poster: "img/how_to_make_love_like_a_porn_star.jpg",
        genre: ["Nonfiction", "Biography", "Memoir", "Autobiography", "Sexuality", "Erotica"]
    },
    {
        isbn: 9780761119401,
        title: "How to Make People Like You in 90 Seconds or Less",
        overview: "Whether selling, managing, negotiating, planning, collaborating, pitching, instructing-or on your knees with a marriage proposal-the secret of success is based on connecting with other people. Now that connection is infinitely easier to make through Nicholas Boothman's program of rapport by design. How to Make People Like You in 90 Seconds or Less is the work of a master of Neuro-Linguistic Programming whose career is teaching corporations and groups the secrets of successful face-to-face communication. Aimed at establishing rapport-that stage between meeting and communicating- How to Make People Like You focuses on the concept of synchrony. It shows how to synchronize attitude, synchronize body language, and synchronize voice tone so that you instantly and imperceptibly become someone the other person likes. Reinforcing these easy-to-learn skills is knowing how to read the other person's sensory preferences-most of us are visual, some are kinesthetic, and a minority are auditory. So when you say \"I see what you mean\" to a visual person, you're really speaking his language. Along the way the book covers attitude, nervousness, words that open a conversation and words that shut it down, compliments, eye cues, the magic of opposites attracting, and more. It's how to make the best of the most important 90 seconds in any relationship, business or personal.",
        pages: "160",
        author: "Nicholas Boothman",
        release_date: "June 1, 1999",
        wikipedia: "Nicholas_Boothman",
        poster: "img/how_to_make_people_like_you_in_90_seconds_or_less.jpg",
        genre: ["Self Help", "Nonfiction", "Psychology", "Business", "Communication", "Relationships", "Personal Development"]
    },
    {
        isbn: 9780671027032,
        title: "How to Win Friends and Influence People",
        overview: "You can go after the job you want...and get it! You can take the job you have...and improve it! You can take any situation you're in...and make it work for you! <p> Since its release in 1936, How to Win Friends and Influence People has sold more than 30 million copies. Dale Carnegie's first book is a timeless bestseller, packed with rock-solid advice that has carried thousands of now famous people up the ladder of success in their business and personal lives. <p> As relevant as ever before, Dale Carnegie's principles endure, and will help you achieve your maximum potential in the complex and competitive modern age. <p> Learn the six ways to make people like you, the twelve ways to win people to your way of thinking, and the nine ways to change people without arousing resentment.",
        pages: "276",
        author: "Dale Carnegie",
        release_date: "October 1, 1936",
        wikipedia: "How_to_Win_Friends_and_Influence_People",
        poster: "img/how_to_win_friends_and_influence_people.jpg",
        genre: ["Self Help", "Nonfiction", "Business", "Psychology", "Personal Development", "Leadership", "Communication"]
    },
    {
        isbn: 9780872860179,
        title: "Howl and Other Poems",
        overview: "Allen Ginsberg's Howl and Other Poems was originally published by City Lights Books in the Fall of 1956. Subsequently seized by U.S. customs and the San Francisco police, it was the subject of a long court trial at which a series of poets and professors persuaded the court that the book was not obscene. <p> Howl & Other Poems is the single most influential poetic work of the post-World War II era, with over 1,000,000 copies now in print.",
        pages: "57",
        author: "Allen Ginsberg",
        release_date: "January 1, 1956",
        wikipedia: "Howl_and_Other_Poems",
        poster: "img/howl_and_other_poems.jpg",
        genre: ["Poetry", "Classics", "Fiction", "American", "Literature"]
    },
    {
        isbn: 9781600784323,
        title: "Huge: A Complete Workout Regimen from Bodybuilding's Superstars",
        overview: "Taking a healthy, graduated approach, this fitness guide provides a safe plan used by competitive bodybuilders. Starting from square one, the book tackles the challenges and rewards of the lifestyle of a bodybuilder as well as the tools to succeed, and includes detailed information on everything that will come up in the process—from potential hazards, distinctions to be made for body type, and a helpful guide of what to expect in the first four weeks. From the respected bodybuilding magazine, this book is the ideal resource for any level of fitness and an interest in building a muscular physique like the champions.",
        pages: "212",
        author: "Flex Magazine",
        release_date: "January 1, 2010",
        wikipedia: "Flex_(magazine)",
        poster: "img/huge_a_complete_workout_regimen_from_bodybuildings_superstars.jpg",
        genre: ["Fitness"]
    },
    {
        isbn: 9780553803709,
        title: "I, Robot",
        overview: "They mustn't harm a human being, they must obey human orders, and they must protect their own existence...but only so long as that doesn't violate rules one and two. With these Three Laws of Robotics, humanity embarked on perhaps its greatest adventure: the invention of the first positronic man. It was a bold new era of evolution that would open up enormous possibilities—and unforeseen risks. For the scientists who invented the earliest robots weren't content that their creations should ' remain programmed helpers, companions, and semisentient worker-machines. And soon the robots themselves; aware of their own intelligence, power, and humanity, aren't either. <p> As humans and robots struggle to survive together—and sometimes against each other—on earth and in space, the future of both hangs in the balance. Human men and women confront robots gone mad, telepathic robots, robot politicians, and vast robotic intelligences that may already secretly control the world. And both are asking the same questions: What is human? And is humanity obsolete? <p> In l, Robot Isaac Asimov changes forever our perception of robots, and human beings and updates the timeless myth of man's dream to play god. with all its rewards—and terrors.",
        pages: "224",
        author: "Isaac Asimov",
        release_date: "December 2, 1950",
        wikipedia: "I,_Robot",
        poster: "img/i_robot.jpg",
        genre: ["Science Fiction", "Fiction", "Classics", "Short Stories", "Fantasy"]
    },
    {
        isbn: 9780786862573,
        title: "I'm Not Really Here",
        overview: "In his number one New York Times bestseller, Don’t Stand Too Close to a Naked Man, Tim Allen regaled us with tales from the male-female front. Now, in I’m Not Really Here, he takes a look at men in midlife—and their relationship to wives, children, friends, the universe, God, and why it’s so tough to get a good night’s sleep. <p> The book opens with Tim suddenly waking from a strange dream. He’s been reading late into the night about today’s hot scientific topic—quantum physics—and what he’s learned about the nature of reality really disturbs him. Fortunately, he’s got plenty of time to mull it over. Tim’s wife and daughter are going away on a camping trip, and Tim is left at home with their dog, Spot. At first, he’s excited at the opportunity to eat what he wants (bologna and potato chip sandwiches), watch the sci-fi videos he loves, and finish the 1946 Ford he’s been restoring so he can deliver it to a car show on Monday. Unfortunately, he can’t find the final part: a one-of-a-kind hood ornament. He encounters very strange coincidences, meets people he doesn’t know who seem to know too much about him, and wonders if his life is half full or half empty. <p> As he roams from room to room, Tim ponders how we wind up sounding like our parents when we raise our own children (“Don’t stir your ice cream into soup!”), men’s fascination with pricey gadgets (“Does this drill bit set really cost $89,000?”), and how romantic “chemistry” really works (“It’s all based on salt”). He describes his own rise to celebrity and what it’s like to buy groceries without wearing a mask. He explores the allure of hot cars, the temptation of fast-food chain prizes which seem to be getting bigger ad bigger all the time (“I’ll have the happy meal and the Harley, please”), and his obsession with his place in the cosmos. <p> I’m Not Really Here deals, in the Toolman’s inimitable way, with some of the urgent questions a man faces at midlife, from “What is real?” to what should he eat for breakfast (“The gummy cinnamon buns or the cereal no one can pronounce? Moose lips. Mouse licks”). This book is a culmination of a five-year journey of self-discovery. It will surprise and challenge, make you wonder and think, and induce laughter on every page.",
        pages: "253",
        author: "Tim Allen",
        release_date: "January 1, 1996",
        wikipedia: "Tim_Allen",
        poster: "img/im_not_really_here.jpg",
        genre: ["Humor", "Nonfiction", "Biography", "Comedy", "Memoir", "Philosophy", "Science"]
    },
    {
        isbn: 9780825305887,
        title: "If I Did It: Confessions of the Killer",
        overview: "In 1994, Ron Goldman and Nicole Brown Simpson were brutally murdered at her home in Brentwood, California. O.J. Simpson was tried for the crime in a case that captured the attention of the American people, but was ultimately found not guilty of criminal charges. The victims' families brought a civil case against Simpson, and he was found liable for willfully and wrongfully causing the deaths of Ron and Nicole by committing battery with malice and oppression. <p> In 2006, HarperCollins announced the publication of a book, titled If I Did It, in which O.J. Simpson told how he hypothetically would have committed the murders. In response to public outrage that Simpson stood to profit from these crimes, HarperCollins canceled the book. A Florida bankruptcy court awarded the rights to the Goldmans in August 2007 to partially satisfy the unpaid civil judgment, which has risen to over $38 million with interest. <p> The Goldman family views this book as his confession and has worked hard to ensure that the public will read this book and learn the truth. This is the original manuscript approved by O.J. Simpson, with a subtitle added by the Goldman family and up to 14,000 words of additional commentary.",
        pages: "208",
        author: "O.J. Simpson",
        release_date: "January 1, 2006",
        wikipedia: "If_I_Did_It",
        poster: "img/if_i_did_it.jpg",
        genre: ["True Crime", "Nonfiction", "Crime", "Biography", "Memoir", "History"]
    },
    {
        isbn: 9780060391836,
        title: "In Contempt",
        overview: "For more than a year, Christopher Darden argued passionately and tirelessly, giving voice to the victims in the O. J. Simpson murder trial. But few people knew that he was fighting a deeper, more insidious battle - against racism that came from all sides. When the case was over and O. J. Simpson was set free, the disheartened prosecutor bore the anguish and disillusionment of millions of Americans. He also carried wounds that perhaps no other black person has ever felt as deeply. Now, out of the sensational frenzy of the \"trial of the century\" comes a haunting and poignant memoir of duty, justice, and the constant, powerful undertow of American bigotry. <p> Christopher Darden's In Contempt is an unflinching look at a justice system kidnapped by a racist cop, shameless defense lawyers, a starstruck judge, and a dysfunctional jury. It shows what the television cameras couldn' behind-the-scenes meetings where Darden tried to determine whether detective Mark Fuhrman was telling the truth about his racist views; deteriorating relationships between the defense and prosecution teams, with taunting, baiting, and a pushing match between Darden and Simpson; and a judge who let the case get out of control while he collected hourglasses from fans and invited celebrities into his chambers. <p> Darden is stunningly candid about his own performance - including the brash decision to put the gloves on Simpson - and details the inner workings of the largest prosecution team in California history. He also recounts the strong relationship forged between himself and Marcia Clark, who was exhausted by the pressures of a bitter ex-husband and demeaning treatment from other lawyers and the judge.",
        pages: "387",
        author: "Christopher Darden, Jess Walter",
        release_date: "January 1, 1996",
        wikipedia: "Christopher_Darden",
        poster: "img/in_contempt.jpg",
        genre: ["True Crime", "Nonfiction", "Crime", "Memoir", "History", "Law", "Biography"]
    },
    {
        isbn: 9780312303563,
        title: "In the Name of Science: A History of Secret Programs, Medical Research, and Human Experimentation",
        overview: "Science, as Andrew Goliszek proves in this compendious, chilling, and eye-opening book, has always had its dark side. Behind the bright promise of life-saving vaccines and life-enhancing technologies lies the true cost of the efforts to develop them. Knowledge has a price; often that price has been human suffering. The ethical limits governing use of the human body in experimentation have been breached, redefined, and breached again---from the moment the first plague-ridden corpse was heaved over the fortifications of a besieged medieval city to the use of cutting-edge gene therapy today. <p> Those limits are in constant need of redefinition, for the goals and the techniques have become both more refined and more secretive. The German and Japanese human experiments of the 1930s and 1940s horrified the world when they came to light. These barbaric exercises in pseudoscience grew out of assumptions of racial superiority. The subjects were deemed subhuman; ordinary guidelines could therefore be suspended. What has happened in the decades since World War II has differed only in degree. Explicitly or implicitly, any organization or government that undertakes or sponsors scientific research applies some measure of human worth. Experimentation rests upon an equation that balances suffering against gain, the good of the collective against the rights of the individual, and the risk of unknown consequences against the rewards of scientific discovery. <p> Everything depends upon who makes that equation. The sobering and gripping accumulation of evidence in this book proves exactly what has been justified in the name of science. The science of \"eugenics\" justified enforced sterilization. The need to gain an upper hand in the Cold War justified CIA experiments involving mind control and drugs. The desperate race to control nuclear proliferation was used to justify radiation experiments whose effects are still being felt today. Chemical warfare, gene therapy, molecular These subjects dominate headlines and even direct our government's foreign policy, yet the whole truth about the experimentation behind them has never been made public. <p> Though not a cheering book, In the Name of Science is a crucially important one, and it deserves a wide audience. A biologist by training, Goliszek presents each topic clearly and explains fully its significance and implications. Connecting the history of scientific experimentation through time with the topics that are likely to dominate the future, he has performed an invaluable service. No other book on the market provides the research included here, or presents it with such persuasive force.",
        pages: "384",
        author: "Andrew Goliszek",
        release_date: "November 15, 2003",
        wikipedia: "",
        poster: "img/in_the_name_of_science.jpg",
        genre: ["Nonfiction", "Science", "History", "Medicine", "Race"]
    },
    {
        isbn: 9780205609994,
        title: "Influence: Science and Practice",
        overview: "Influence: Science and Practice is an examination of the psychology of compliance (i.e. uncovering which factors cause a person to say “yes” to another's request). Written in a narrative style combined with scholarly research, Cialdini combines evidence from experimental work with the techniques and strategies he gathered while working as a salesperson, fundraiser, advertiser, and in other positions inside organizations that commonly use compliance tactics to get us to say “yes.” Widely used in classes, as well as sold to people operating successfully in the business world, the eagerly awaited revision of Influence reminds the reader of the power of persuasion. Cialdini organizes compliance techniques into six categories based on psychological principles that direct human behavior: reciprocation, consistency, social proof, liking, authority, and scarcity.",
        pages: "260",
        author: "Robert B. Cialdini",
        release_date: "January 1, 1984",
        wikipedia: "Robert_Cialdini",
        poster: "img/influence.jpg",
        genre: ["Psychology", "Business", "Nonfiction", "Self Help", "Personal Development", "Leadership", "Communication"]
    },
    {
        isbn: 9781982112691,
        title: "Is This Anything?",
        overview: "Since his first performance at the legendary New York nightclub “Catch a Rising Star” as a twenty-one-year-old college student in fall of 1975, Jerry Seinfeld has written his own material and saved everything. “Whenever I came up with a funny bit, whether it happened on a stage, in a conversation, or working it out on my preferred canvas, the big yellow legal pad, I kept it in one of those old school accordion folders,” Seinfeld writes. “So I have everything I thought was worth saving from forty-five years of hacking away at this for all I was worth.” <p> For this book, Jerry Seinfeld has selected his favorite material, organized decade by decade. In page after hilarious page, one brilliantly crafted observation after another, readers will witness the evolution of one of the great comedians of our time and gain new insights into the thrilling but unforgiving art of writing stand-up comedy.",
        pages: "480",
        author: "Jerry Seinfeld",
        release_date: "October 6, 2020",
        wikipedia: "Is_This_Anything%3F_(book)",
        poster: "img/is_this_anything.jpg",
        genre: ["Nonfiction", "Humor", "Comedy", "Memoir", "Biography", "Autobiography"]
    },
    {
        isbn: 9780553375404,
        title: "Ishmael: An Adventure of the Mind and Spirit",
        overview: "Winner of the 1992 Turner Tomorrow Fellowship, Ishmael is a unique and captivating novel that has earned a large and passionate following among readers and critics worldwide. One of the most beloved and bestselling novels of spiritual adventure ever published, it is the story of a man who embarks on a highly provocative intellectual adventure with a gorilla--a journey of the mind and spirit that changes forever the way he sees the world and humankind's place in it. For this special fifth anniversary edition, the author has written a frank and informative introduction in which he discusses the worldwide Ishmael phenomenon. Timed to coincide with the eagerly anticipated publication of My Ishmael and the release of the movie Ishmael, this special edition is sure to attract new readers and reinforce Daniel Quinn's reputation as one of the most compelling and visionary writers of our age.",
        pages: "266",
        author: "Daniel Quinn",
        release_date: "January 1, 1992",
        wikipedia: "Ishmael_(Quinn_novel)",
        poster: "img/ishmael.jpg",
        genre: ["Fiction", "Philosophy", "Spirituality", "Classics", "Fantasy", "Environment", "Novels"]
    },
    {
        isbn: 9781560253938,
        title: "Joey the Hitman: The Autobiography of a Mafia Killer",
        overview: "Following up on the success of the Adrenaline title Stories of Death and Betrayal from Organized Crime, Adrenaline Classics brings back the New York Times bestseller (originally published as Killer) that helped pave the way for the latest generation of nouveau-mob stories, from Donnie Brasco to The Sopranos. \"Joey\" -- a journeyman Jewish hitman, numbers king, and loan shark -- collaborated with David Fisher (co-editor of the hit Adrenaline title Wild Blue) to lay out the rackets in gripping detail. His story includes detailed accounts of his chillingly \"professional\" murders of thirty-eight victims. The strong sales of Mob are further evidence that the best mafia stories -- and this is one of the best -- capture the public's interest. Joey the Hitman 's original best-seller status reflects the quality of the writing, the frank intelligence of the subject/writer, and Joey's convincingly matter-of-fact, regular-guy tone. When he writes, debunking The Godfather, \". . . Actually very few mob members even have Bronx-Italian accents . . . a lot of mob people are not very tough, the people we meet and deal with are very ordinary, most of us stay home at night and watch TV, and we only shoot each other when absolutely necessary,\" you know you're listening to the original Soprano. This edition includes a new afterword from David Fisher, who for the first time reveals Joey's identity and the incredible story of how Joey finally died.",
        pages: "288",
        author: "Joey, David Fisher",
        release_date: "March 17, 2002",
        wikipedia: "",
        poster: "img/joey_the_hitman.jpg",
        genre: ["True Crime", "Nonfiction", "Crime", "Biography", "Autobiography"]
    },
    {
        isbn: 9781567184853,
        title: "Journey of Souls: Case Studies of Life Between Lives",
        overview: "Learn the latest details and most recent groundbreaking discoveries that reveal, for the first time, the mystery of life in the spirit world after death on Earth―proof that our consciousness survives―in Journey of Souls by Michael Newton, PhD. Using a special hypnosis technique to reach the hidden memories of subjects, Dr. Newton discovered some amazing insights into what happens to us between lives. Journey of Souls is the record of 29 people who recalled their experiences between physical deaths. Through their extraordinary stories, you will learn specifics about: Journey of Souls is a graphic record or \"travel log\" by these people of what happens between lives on Earth. They give specific details as they movingly describe their astounding experiences. After reading Journey of Souls, you will gain a better understanding of the immortality of the human soul. You will meet day-to-day challenges with a greater sense of purpose. You will begin to understand the reasons behind events in your own life. Journey of Souls is a life-changing book. Already, over 600,000 people have taken Journey of Souls to heart, giving them hope in trying times.",
        pages: "278",
        author: "Michael Newton",
        release_date: "January 1, 1994",
        wikipedia: "Destiny_of_Souls",
        poster: "img/journey_of_souls.jpg",
        genre: ["Spirituality", "Nonfiction", "Psychology", "Self Help", "Philosophy", "Religion"]
    },
    {
        isbn: 9780871137838,
        title: "Killing Pablo: The Hunt for the World's Greatest Outlaw",
        overview: "Killing Pablo is the story of the fifteen-month manhunt for Colombian cocaine cartel kingpin Pablo Escobar, whose escape from his lavish, mansionlike jail drove a nation to the brink of chaos. In a gripping, up-close account, acclaimed journalist Mark Bowden exposes the never-before-revealed details of how U.S. military and intelligence operatives covertly led the mission to find and kill the world's most dangerous outlaw. Drawing on unprecedented access to the soldiers, field agents, and officials involved in the chase, as well as hundreds of pages of top-secret documents and transcripts of Escobar's intercepted phone conversations, Bowden creates a narrative that reads as if it were torn from the pages of a Tom Clancy technothriller.Killing Pablo also tells the story of Escobar's rise, how he built a criminal organization that would hold an entire nation hostage -- and the stories of the intrepid men who would ultimately bring him down. There is Steve Jacoby, the leader of Centra Spike, the ultrasecret U.S. special forces team that would use cutting-edge surveillance technology to find one man among a nation of 37 million. There is Morris Busby, U.S. ambassador to Colombia, who would convince the Bush administration to approve the deployment of the shadowy Delta Force operators who would be the key to the drug lord's demise. And there is Escobar's archenemy, Col. Hugo Martinez, the leader of Colombia's federal police, who would turn down a $6 million bribe, survive countless attempts on his life, and endure a humiliating exile while waging his battle against the drug lord's criminal empire. It was Martinez's son, raised in the shadow of constant threat from Escobar's followers, whowould ultimately track the fugitive to a Bogota rooftop on the fateful day in 1993 when the outlaw would finally meet his end.",
        pages: "296",
        author: "Mark Bowden",
        release_date: "January 1, 2001",
        wikipedia: "Killing_Pablo",
        poster: "img/killing_pablo.jpg",
        genre: ["Nonfiction", "History", "True Crime", "Crime", "Biography", "Politics"]
    },
    {
        isbn: 9780871138385,
        title: "LAbyrinth: A Detective Investigates the Murders of Tupac Shakur and Notorious B.I.G. The Implication of Death Row Records' Suge Knight and the Origins of the Los Angeles Police Scandal",
        overview: "An investigation into the murders of Tupac Shakur and Biggie Smalls offers a stunning exposT of the link between the LAPD Rampart scandal and gang violence and controversial rap celebrities as it describes how members of the LAPD became involved in criminal activities and how high-level officials covered it up. 50,000 first printing.",
        pages: "324",
        author: "Randall Sullivan",
        release_date: "January 1, 2002",
        wikipedia: "Randall_Sullivan",
        poster: "img/labyrinth.jpg",
        genre: ["True Crime", "Nonfiction", "Music", "Biography", "Crime", "History"]
    },
    {
        isbn: 9780972376600,
        title: "Law School Insider: The Comprehensive 21st Century Guide to Success in Admissions, Classes, Law Review, Bar Exams and Job Searches, for Prospective Students and Their Loved Ones",
        overview: "One book answers every important question faced by today s new law students and their families: Law School Insider is an easy-to-read, step-by-step law school guide from applying to graduating and beyond. <p> Discover modern legal careers and learn how to win jobs with top law firms and judges. Take an inside look at modern family, gender, racial, and other key issues for today s students. Find out how to take classes in Europe and Asia for credit in United States law schools. Conquer the nation s toughest bar exams and learn which have the highest pass rates. Learn all about law reviews, their secret elections, and how to become an editor. <p> \"I even found myself reading it in class. I know, shame on me!\" says Alice Milrud, First-Year Law Student at Hofstra Law School, Successful Transfer Student to UCLA School of Law. <p> Written by Jeremy B. Horwitz, who graduated from Cornell Law School cum laude in 2001 and served as Internet Editor of the Cornell Law Review. He has passed the notoriously difficult California Bar Examination and worked for two international law firms. His work has appeared in The New York Times and numerous other national publications.",
        pages: "400",
        author: "Jeremy B. Horwitz",
        release_date: "November 7, 2002",
        wikipedia: "",
        poster: "img/law_school_insider.jpg",
        genre: ["law"]
    },
    {
        isbn: 9781936891306,
        title: "Left of Bang: How the Marine Corps' Combat Hunter Program Can Save Your Life",
        overview: "\"At a time when we must adapt to the changing character of conflict, this is a serious book on a serious issue that can give us the edge we need.\” —General James Mattis, USMC, Ret. \"Left of Bang offers a crisp lesson in survival in which Van Horne and Riley affirm a compelling It's better to detect sinister intentions early than respond to violent actions late. Left of Bang helps readers avoid the bang.\" —Gavin de Becker, bestselling author of The Gift of Fear \"Rare is the book that is immediately practical and interesting. Left of Bang accomplishes this from start to finish. There is something here for everyone in the people business and we are all in the people business.\" —Joe Navarro, bestselling author of What Every BODY is Saying. \"Left of Bang is a highly important and innovative book that offers a substantial contribution to answering the challenge of Fourth Generation war (4GW).\" —William S. Lind, author of Maneuver Warfare Handbook \"Like Sun Tzu's The Art of War , Left of Bang isn't just for the military. It's a must read for anyone who has ever had a gut feeling that something's not quite right...be it walking down the street, sitting in a corporate boardroom, or even entering an empty home.\" -- Steven Pressfield, bestselling author of The Lion's Gate , The Warrior Ethos and Gates of Fire “An amazing book! Applying the lessons learned during the longest war in American history, and building on seminal works like The Gift of Fear and On Combat , this book provides a framework of knowledge that will bring military, law enforcement, and individual citizens to new levels of survival mindset and performance in life-and-death situations. Left of Bang is an instant classic.” --Lt. Colonel Dave Grossman, U.S. Army Ret., author of On Combat and On Killing -- You walk into a restaurant and get an immediate sense that you should leave. -- You are about to step onto an elevator with a stranger and something stops you. -- You interview a potential new employee who has the resume to do the job, but something tells you not to offer a position. These scenarios all represent LEFT OF BANG , the moments before something bad happens. But how many times have you talked yourself out of leaving the restaurant, getting off the elevator, or getting over your silly “gut” feeling about someone? Is there a way to not just listen to your inner protector more, but to actually increase your sensitivity to threats before they happen? Legendary Marine General James Mattis asked the same question and issued a directive to operationalize the Marine Corps’ Combat Hunter program. A comprehensive and no-nonsense approach to heightening each and every one of our gifts of fear, LEFT OF BANG is the result.",
        pages: "228",
        author: "Patrick Van Horne, Jason A. Riley",
        release_date: "June 13, 2014",
        wikipedia: "",
        poster: "img/left_of_bang.jpg",
        genre: ["Military Fiction", "Nonfiction", "Survival", "Psychology", "Self Help", "War"]
    },
    {
        isbn: 9780385514453,
        title: "Legacy of Ashes: The History of the CIA",
        overview: "For the last sixty years, the CIA has managed to maintain a formidable reputation in spite of its terrible record, burying its blunders in top-secret archives. Its mission was to know the world. When it did not succeed, it set out to change the world. Its failures have handed us, in the words of President Eisenhower, “a legacy of ashes.” <p> Now Pulitzer Prize–winning author Tim Weiner offers the first definitive history of the CIA—and everything is on the record. LEGACY OF ASHES is based on more than 50,000 documents, primarily from the archives of the CIA itself, and hundreds of interviews with CIA veterans, including ten Directors of Central Intelligence. It takes the CIA from its creation after World War II, through its battles in the cold war and the war on terror, to its near-collapse after September 11th, 2001. <p> Tim Weiner’s past work on the CIA and American intelligence was hailed as “impressively reported” and “immensely entertaining” in The New York Times. <p> The Wall Street Journal called it “truly extraordinary . . . the best book ever written on a case of espionage.” Here is the hidden history of the CIA: why eleven presidents and three generations of CIA officers have been unable to understand the world; why nearly every CIA director has left the agency in worse shape than he found it; and how these failures have profoundly jeopardized our national security.",
        pages: "514",
        author: "Tim Weiner",
        release_date: "July 1, 2007",
        wikipedia: "Legacy_of_Ashes_(book)",
        poster: "img/legacy_of_ashes.jpg",
        genre: ["History", "Nonfiction", "Politics", "Espionage", "American History", "War"]
    },
    {
        isbn: 9781501139154,
        title: "Leonardo da Vinci",
        overview: "Based on thousands of pages from Leonardo's astonishing notebooks and new discoveries about his life and work, Walter Isaacson weaves a narrative that connects his art to his science. He shows how Leonardo's genius was based on skills we can improve in ourselves, such as passionate curiosity, careful observation, and an imagination so playful that it flirted with fantasy. He produced the two most famous paintings in history, The Last Supper and the Mona Lisa. But in his own mind, he was just as much a man of science and technology. With a passion that sometimes became obsessive, he pursued innovative studies of anatomy, fossils, birds, the heart, flying machines, botany, geology, and weaponry. His ability to stand at the crossroads of the humanities and the sciences, made iconic by his drawing of Vitruvian Man, made him history's most creative genius.",
        pages: "600",
        author: "Walter Isaacson",
        release_date: "October 17, 2017",
        wikipedia: "Walter_Isaacson",
        poster: "img/leonardo_da_vinci.jpg",
        genre: ["Biography", "Nonfiction", "History", "Art", "Science"]
    },
    {
        isbn: 9780156027328,
        title: "Life of Pi",
        overview: "The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. When Pi is sixteen, his family emigrates from India to North America aboard a Japanese cargo ship, along with their zoo animals bound for new homes. <p> The ship sinks. Pi finds himself alone in a lifeboat, his only companions a hyena, an orangutan, a wounded zebra, and Richard Parker, a 450-pound Bengal tiger. Soon the tiger has dispatched all but Pi, whose fear, knowledge, and cunning allow him to coexist with Richard Parker for 227 days while lost at sea.",
        pages: "326",
        author: "Yann Martel",
        release_date: "September 11, 2001",
        wikipedia: "Life_of_Pi",
        poster: "img/life_of_pi.jpg",
        genre: ["Fiction", "Fantasy", "Classics", "Adventure", "Contemporary", "Novels"]
    },
    {
        isbn: 9780899683201,
        title: "Lincoln the Unknown",
        overview: "The Unknown Lincoln is a biography on Abraham Lincoln, written in 1932 by Dale Carnegie. The book offers an inspiring glimpse into Lincoln's legendary life: the hardships of his early years, the difficulties of his White House days, his tragicomic marriage, and the war with the South.",
        pages: "256",
        author: "Dale Carnegie",
        release_date: "January 1, 1932",
        wikipedia: "Lincoln_the_Unknown",
        poster: "img/lincoln_the_unknown.jpg",
        genre: ["Biography", "History", "Nonfiction", "Self Help", "Politics", "Classics", "Presidents"]
    },
    {
        isbn: 9780316511681,
        title: "Little Man: Meyer Lansky and the Gangster Life",
        overview: "Based on interviews with Lansky's close friends & criminal associates, with law enforcement experts, & with members of Lansky's own family, & using previously unpublished documents written by Lansky himself, this is both the biography of a mob operator & a social history of American crime.",
        pages: "559",
        author: "Robert Lacey",
        release_date: "January 1, 1991",
        wikipedia: "Meyer_Lansky",
        poster: "img/little_man.jpg",
        genre: ["Biography", "True Crime", "Crime", "Nonfiction", "History", "American History"]
    },
    {
        isbn: 9781573220187,
        title: "Living Buddha, Living Christ",
        overview: "Exploring the spiritual connection between Christianity and Buddhism, Thich Nhat Hanh reawakens an understanding of both religions and offers simple yet meaningful ways to enhance our daily lives.",
        pages: "240",
        author: "Thich Nhat Hanh",
        release_date: "September 1, 1997",
        wikipedia: "Thích_Nhất_Hạnh",
        poster: "img/living_buddha_living_christ.jpg",
        genre: ["Religion", "Spirituality", "Buddhism", "Nonfiction", "Philosophy", "Christianity", "Theology"]
    },
    {
        isbn: 9780743222259,
        title: "Living History",
        overview: "Hillary Rodham Clinton is known to hundreds of millions of people around the world. Yet few beyond her close friends and family have ever heard her account of her extraordinary journey. She writes with candor, humor and passion about her upbringing in suburban, middle-class America in the 1950s and her transformation from Goldwater Girl to student activist to controversial First Lady. <p> Living History is her revealing memoir of life through the White House years. It is also her chronicle of living history with Bill Clinton, a thirty-year adventure in love and politics that survives personal betrayal, relentless partisan investigations and constant public scrutiny. <p> Hillary Rodham Clinton came of age during a time of tumultuous social and political change in America. Like many women of her generation, she grew up with choices and opportunities unknown to her mother or grandmother. She charted her own course through unexplored terrain -- responding to the changing times and her own internal compass -- and became an emblem for some and a lightning rod for others. Wife, mother, lawyer, advocate and international icon, she has lived through America's great political wars, from Watergate to Whitewater. <p> The only First Lady to play a major role in shaping domestic legislation, Hillary Rodham Clinton traveled tirelessly around the country to champion health care, expand economic and educational opportunity and promote the needs of children and families, and she crisscrossed the globe on behalf of women's rights, human rights and democracy. She redefined the position of First Lady and helped save the presidency from an unconstitutional, politically motivated impeachment. Intimate, powerful and inspiring, Living History captures the essence of one of the most remarkable women of our time and the challenging process by which she came to define herself and find her own voice -- as a woman and as a formidable figure in American politics.",
        pages: "567",
        author: "Hillary Rodham Clinton",
        release_date: "June 9, 2003",
        wikipedia: "Living_History_(book)",
        poster: "img/living_history.jpg",
        genre: ["Nonfiction", "Biography", "Politics", "Memoir", "History", "Autobiography"]
    },
    {
        isbn: 9781455570249,
        title: "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World",
        overview: "If you want to change the world, start off by making your bed. <p> If you make your bed every morning, you will have accomplished the first task of the day. It will give you a small sense of pride and it will encourage you to do another task and another and another. By the end of the day, that one task completed will have turned into many tasks completed. Making your bed will also reinforce the fact that little things in life matter. I you can't do the little things right, you will never do the big things right. <p> - From Admiral McRaven's University of Texas Commencement Speech",
        pages: "144",
        author: "William H. McRaven",
        release_date: "April 4, 2017",
        wikipedia: "William_H._McRaven",
        poster: "img/make_your_bed.jpg",
        genre: ["Nonfiction", "Self Help", "Personal Development", "Leadership", "Business", "Psychology"]
    },
    {
        isbn: 9780802132130,
        title: "Malcolm X Speaks: Selected Speeches and Statements",
        overview: "These are the major speeches made by Malcolm X during the last tumultuous eight months of his life. In this short period of time, his vision for abolishing racial inequality in the United States underwent a vast transformation. Beginning with his break from the Black Muslims, he moved increasingly away from the dogmas of black nationalism, separatism, and violent revolution as the only means to achieve freedom. Although he continued to believe that the African-American community must be committed to its own liberation, excluding all others not equally devoted to this goal, he had come to take a broader view of human rights, and to accept at least the possibility of alliances with other groups. As I.F. Stone wrote in his review, \"In these pages on can begin to understand Malcolm X's power as a speaker and to see the political legacy he left his people in their struggle for full emancipation.\"",
        pages: "240",
        author: "Malcolm X",
        release_date: "January 1, 1965",
        wikipedia: "Malcolm_X",
        poster: "img/malcolm_x_speaks.jpg",
        genre: ["Nonfiction", "History", "Politics", "Race", "African American", "Biography", "Philosophy"]
    },
    {
        isbn: 9780670022205,
        title: "Malcolm X: A Life of Reinvention",
        overview: "Of the great figure in twentieth-century American history perhaps none is more complex and controversial than Malcolm X. Constantly rewriting his own story, he became a criminal, a minister, a leader, and an icon, all before being felled by assassins' bullets at age thirty-nine. Through his tireless work and countless speeches he empowered hundreds of thousands of black Americans to create better lives and stronger communities while establishing the template for the self-actualized, independent African American man. In death he became a broad symbol of both resistance and reconciliation for millions around the world. <p> Manning Marable's new biography of Malcolm is a stunning achievement. Filled with new information and shocking revelations that go beyond the Autobiography, Malcolm X unfolds a sweeping story of race and class in America, from the rise of Marcus Garvey and the Ku Klux Klan to the struggles of the civil rights movement in the fifties and sixties. Reaching into Malcolm's troubled youth, it traces a path from his parents' activism through his own engagement with the Nation of Islam, charting his astronomical rise in the world of Black Nationalism and culminating in the never-before-told true story of his assassination. Malcolm X will stand as the definitive work on one of the most singular forces for social change, capturing with revelatory clarity a man who constantly strove, in the great American tradition, to remake himself anew.",
        pages: "608",
        author: "Manning Marable",
        release_date: "April 4, 2011",
        wikipedia: "Malcolm_X:_A_Life_of_Reinvention",
        poster: "img/malcolm_x_a_life_of_reinvention.jpg",
        genre: ["Biography", "History", "Nonfiction", "Race", "Politics", "African American", "American History"]
    },
    {
        isbn: 9780807014295,
        title: "Man's Search for Meaning",
        overview: "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Based on his own experience and the stories of his patients, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. At the heart of his theory, known as logotherapy, is a conviction that the primary human drive is not pleasure but the pursuit of what we find meaningful. Man's Search for Meaning has become one of the most influential books in America; it continues to inspire us all to find significance in the very act of living.",
        pages: "165",
        author: "Viktor E. Frankl",
        release_date: "January 1, 1959",
        wikipedia: "Man%27s_Search_for_Meaning",
        poster: "img/mans_search_for_meaning.jpg",
        genre: ["Nonfiction", "Psychology", "Philosophy", "History", "Self Help", "Memoir", "Biography"]
    },
    {
        isbn: 0000000000000,
        title: "Manna",
        overview: "A tale of two societies and how they handle the coming robotic revolution.",
        pages: "79",
        author: "Marshall Brain",
        release_date: "January 1, 2003",
        wikipedia: "Manna_(novel)",
        poster: "img/manna.jpg",
        genre: ["Science Fiction", "Fiction", "Dystopia", "Technology", "Artificial Intelligence", "Short Stories", "Philosophy"]
    },
    {
        isbn: 9780394549262,
        title: "Manufacturing Consent",
        overview: "In this pathbreaking work, Edward S. Herman and Noam Chomsky show that, contrary to the usual image of the news media as cantankerous, obstinate, and ubiquitous in their search for truth and defense of justice, in their actual practice they defend the economic, social, and political agendas of the privileged groups that dominate domestic society, the state, and the global order. Based on a series of case studies—including the media’s dichotomous treatment of “worthy” versus “unworthy” victims, “legitimizing” and “meaningless” Third World elections, and devastating critiques of media coverage of the U.S. wars against Indochina—Herman and Chomsky draw on decades of criticism and research to propose a Propaganda Model to explain the media’s behavior and performance. What emerges from this work is a powerful assessment of how propagandistic the U.S. mass media are, how they systematically fail to live up to their self-image as providers of the kind of information that people need to make sense of the world, and how we can understand their function in a radically new way.",
        pages: "412",
        author: "Edward S. Herman, Noam Chomsky",
        release_date: "January 1, 1988",
        wikipedia: "Manufacturing_Consent",
        poster: "img/manufacturing_consent.jpg",
        genre: ["Politics", "Nonfiction", "History", "Philosophy", "Sociology", "Economics", "Journalism"]
    },
    {
        isbn: 9780679746324,
        title: "Mao: The Unknown Story",
        overview: "The most authoritative life of the Chinese leader ever written, Mao: The Unknown Story is based on a decade of research, and on interviews with many of Mao's close circle in China who have never talked before -- and with virtually everyone outside China who had significant dealings with him. It is full of startling revelations, exploding the myth of the Long March, and showing a completely unknown Mao: he was not driven by idealism or ideology; his intimate and intricate relationship with Stalin went back to the 1920s, ultimately bringing him to power; he welcomed Japanese occupation of much of China; and he schemed, poisoned, and blackmailed to get his way. After Mao conquered China in 1949, his secret goal was to dominate the world. In chasing this dream he caused the deaths of 38 million people in the greatest famine in history. In all, well over 70 million Chinese perished under Mao's rule -- in peacetime.",
        pages: "801",
        author: "Jung Chang, Jon Halliday",
        release_date: "September 1, 2002",
        wikipedia: "Mao:_The_Unknown_Story",
        poster: "img/mao_the_unknown_story.jpg",
        genre: ["History", "Biography", "China", "Nonfiction", "Politics", "Asia", "Memoir"]
    },
    {
        isbn: 9781595580900,
        title: "May It Please the Court: The Most Significant Oral Arguments Made Before the Supreme Court Since 1955",
        overview: "Until The New Press first published May It Please the Court in 1993, few Americans knew that every case argued before the Supreme Court since 1955 had been recorded. The original book-and-tape set was a revelation to readers and reviewers, quickly becoming a bestseller and garnering praise across the nation. <p> May It Please the Court includes both live recordings and transcripts of oral arguments in twenty-three of the most significant cases argued before the Supreme Court in the second half of the twentiethcentury. This edition makes the recordings available on an MP3 audio CD. Through the voices of some of the nation's most important lawyers and justices, including Thurgood Marshall, Archibald Cox, and Earl Warren, it offers a chance to hear firsthand our justice system at work, in the highest court of the land. <p> Cases Gideon v. Wainwright (right to counsel) Abington School District v. Schempp (school prayer) Miranda v. Arizona (\"the right to remain silent\") Roe v. Wade (abortion rights) Edwards v. Aguillard (teaching \"creationism\") Regents v. Bakke (reverse discrimination) Wisconsin v. Yoder (compulsory schooling for the Amish) Tinker v. Des Moines (Vietnam protest in schools) Texas v. Johnson (flag burning) New York Times v. United States (Pentagon Papers) Cox v. Louisiana (civil rights demonstrations) Communist Party v. Subversive Activities Control Board (freedom of association) Terry v. Ohio (\"stop and frisk\" by police) Gregg v. Georgia (capital punishment) Cooper v. Aaron (Little Rock school desegregation) Heart of Atlanta Motel v. United States (public accommodations) Palmer v. Thompson (swimming pool integration) Loving v. Virginia (interracial marriage) San Antonio v. Rodriguez (equal funding for public schools) Bowers v. Hardwick (homosexual rights) Baker v. Carr (\"one person, one vote\") United States v. Nixon (Watergate tapes) DeShaney v. Winnebago County (child abuse)",
        pages: "375",
        author: "Peter Irons, Stephanie Guitton",
        release_date: "August 1, 1993",
        wikipedia: "Peter_Irons",
        poster: "img/may_it_please_the_court.jpg",
        genre: ["Law", "History", "Nonfiction"]
    },
    {
        isbn: 9780671635046,
        title: "Miles: The Autobiography",
        overview: "For more than forty years Miles Davis has been in the front rank of American music. Universally acclaimed as a musical genius, Miles is one of the most important and influential musicians in the world. The subject of several biographies, now Miles speaks out himself about his extraordinary life. <p> Miles: The Autobiography, like Miles himself, holds nothing back. For the first time Miles talks about his five-year silence. He speaks frankly and openly about his drug problem and how he overcame it. He condemns the racism he has encountered in the music business and in American society generally. And he discusses the women in his life. But above all, Miles talks about music and musicians, including the legends he has played with over the years: Bird, Dizzy, Monk, Trane, Mingus, and many others. <p> The man who has given us some of the most exciting music of the past few decades has now given us a compelling and fascinating autobiography, featuring a concise discography and thirty-two pages of photographs.",
        pages: "424",
        author: "Miles Davis, Quincy Troupe",
        release_date: "January 1, 1989",
        wikipedia: "Miles:_The_Autobiography",
        poster: "img/miles_the_autobiography.jpg",
        genre: ["Music", "Biography", "Nonfiction", "Jazz", "Autobiography", "Memoir", "History"]
    },
    {
        isbn: 9780743241656,
        title: "Mind Wide Open: Your Brain and the Neuroscience of Everyday Life",
        overview: "A tour of today's cutting-edge brain research challenges readers to reevaluate the essence of human personality and fate, explaining how the brain predicts and processes events, describing breakthroughs in biofeedback technology, citing the sources of creativity and ideas, and offering insight into brain neurochemistry. 50,000 first printing.",
        pages: "288",
        author: "Steven Johnson",
        release_date: "January 1, 1999",
        wikipedia: "Steven_Johnson_(author)",
        poster: "img/mind_wide_open.jpg",
        genre: ["Science", "Nonfiction", "Psychology", "Neuroscience", "Brain", "Medicine", "Biology"]
    },
    {
        isbn: 9780028644165,
        title: "Mob Star: The Story of John Gotti",
        overview: "Two investigative journalists offer a behind-the-scenes look at New York mob chieftain John Gotti, who has been able to elude the government's efforts to convict him on charges of murder, conspiracy, gambling and corruption",
        pages: "416",
        author: "Jerry Capeci, Gene Mustain",
        release_date: "April 1, 1988",
        wikipedia: "John_Gotti",
        poster: "img/mob_star.jpg",
        genre: ["True Crime", "Nonfiction", "Crime", "Autobiography", "Biography", "History"]
    },
    {
        isbn: 9780143109259,
        title: "Modern Romance",
        overview: "A hilarious, thoughtful, and in-depth exploration of the pleasures and perils of modern romance from Aziz Ansari, the star of Master of None  and one of this generation’s sharpest comedic voices. <p> At some point, every one of us embarks on a journey to find love. We meet people, date, get into and out of relationships, all with the hope of finding someone with whom we share a deep connection. This seems standard now, but it’s wildly different from what people did even just decades ago. Single people today have more romantic options than at any point in human history. With technology, our abilities to connect with and sort through these options are staggering. So why are so many people frustrated? <p> Some of our problems are unique to our time. “Why did this guy just text me an emoji of a pizza?” “Should I go out with this girl even though she listed Combos as one of her favorite snack foods? Combos?!” “My girlfriend just got a message from some dude named Nathan. Who’s Nathan? Did he just send her a photo of his penis? Should I check just to be sure?” <p> But the transformation of our romantic lives can’t be explained by technology alone. In a short period of time, the whole culture of finding love has changed dramatically. A few decades ago, people would find a decent person who lived in their neighborhood. Their families would meet and, after deciding neither party seemed like a murderer, they would get married and soon have a kid, all by the time they were twenty-four. Today, people marry later than ever and spend years of their lives on a quest to find the perfect person, a soul mate. <p> For years, Aziz Ansari has been aiming his comic insight at modern romance, but for Modern Romance , the book, he decided he needed to take things to another level. He teamed up with NYU sociologist Eric Klinenberg and designed a massive research project, including hundreds of interviews and focus groups conducted everywhere from Tokyo to Buenos Aires to Wichita. They analyzed behavioral data and surveys and created their own online research forum on Reddit, which drew thousands of messages. They enlisted the world’s leading social scientists, including Andrew Cherlin, Eli Finkel, Helen Fisher, Sheena Iyengar, Barry Schwartz, Sherry Turkle, and Robb Willer. The result is unlike any social science or humor book we’ve seen before. <p> In Modern Romance , Ansari combines his irreverent humor with cutting-edge social science to give us an unforgettable tour of our new romantic world.",
        pages: "288",
        author: "Aziz Ansari",
        release_date: "June 16, 2015",
        wikipedia: "Modern_Romance:_An_Investigation",
        poster: "img/modern_romance.jpg",
        genre: ["Nonfiction", "Humor", "Romance", "Comedy", "Sociology", "Psychology"]
    },
    {
        isbn: 9780140232257,
        title: "Monster: The Autobiography of an L.A. Gang Member",
        overview: "After pumping eight blasts from a sawed-off shotgun at a group of rival gang members, twelve-year-old Kody Scott was initiated into the L.A. gang the Crips. He quickly matured into one of the most formidable Crip combat soldiers, earning the name “Monster” for committing acts of brutality and violence that repulsed even his fellow gang members. When the inevitable jail term confined him to a maximum-security cell, a complete political and personal transformation followed: from Monster to Sanyika Shakur, black nationalist, member of the New Afrikan Independence Movement, and crusader against the causes of gangsterism. In a document that has been compared to The Autobiography of Malcolm X and Eldridge Cleaver’s Soul on Ice, Shakur makes palpable the despair and decay of America’s inner cities and gives eloquent voice to one aspect of the black ghetto experience today.",
        pages: "400",
        author: "Sanyika Shakur",
        release_date: "May 1, 1993",
        wikipedia: "Monster:_The_Autobiography_of_an_L.A._Gang_Member",
        poster: "img/monster.jpg",
        genre: ["Nonfiction", "Biography", "Crime", "True Crime", "Memoir", "Autobiography", "African American"]
    },
    {
        isbn: 9780451524935,
        title: "My Life",
        overview: "President Bill Clinton’s My Life is the strikingly candid portrait of a global leader who decided early in life to devote his intellectual and political gifts, and his extraordinary capacity for hard work, to serving the public. <p> It shows us the progress of a remarkable American, who, through his own enormous energies and efforts, made the unlikely journey from Hope, Arkansas, to the White House—a journey fueled by an impassioned interest in the political process which manifested itself at every stage of his life: in college, working as an intern for Senator William Fulbright; at Oxford, becoming part of the Vietnam War protest movement; at Yale Law School, campaigning on the grassroots level for Democratic candidates; back in Arkansas, running for Congress, attorney general, and governor. <p> We see his career shaped by his resolute determination to improve the life of his fellow citizens, an unfaltering commitment to civil rights, and an exceptional understanding of the practicalities of political life. <p> We come to understand the emotional pressures of his youth—born after his father’s death; caught in the dysfunctional relationship between his feisty, nurturing mother and his abusive stepfather, whom he never ceased to love and whose name he took; drawn to the brilliant, compelling Hillary Rodham, whom he was determined to marry; passionately devoted, from her infancy, to their daughter, Chelsea, and to the entire experience of fatherhood; slowly and painfully beginning to comprehend how his early denial of pain led him at times into damaging patterns of behavior. <p> President Clinton’s book is also the fullest, most concretely detailed, most nuanced account of a presidency ever written—encompassing not only the high points and crises but the way the presidency actually works: the day-to-day bombardment of problems, personalities, conflicts, setbacks, achievements.",
        pages: "1008",
        author: "Bill Clinton",
        release_date: "January 1, 2004",
        wikipedia: "My_Life_(Clinton_autobiography)",
        poster: "img/my_life.jpg",
        genre: ["Biography", "Nonfiction", "Politics", "History", "Memoir", "Autobiography", "Presidents"]
    },
    {
        isbn: 9780984815203,
        title: "My Mother, My Son",
        overview: "My Mother, My Son illustrates the power of love and a cruel twist of fate. A son who came from a struggling family that had little means was able to fulfill his mother's lifelong dream to be successful, a \"big shot\" with all the status and trappings that entailed. Little did they know that her dream would end with a disease that had become an integral part of his livelihood. <p> As Dwayne Clark became a successful executive in the senior living industry, his mother was diagnosed with Alzheimer's disease and became a resident of one of his memory care communities. Even though his life's work dealt with the elderly and memory loss, he still has to come to terms with the diagnosis and the painful realization that his mother would one day forget who he was and the dreams and memories they had shared. This story chronicles the life of the author's feisty and wildly devoted, single mother, her childhood in India, the memories of a struggling young family and the many life lessons that she taught him along the way.",
        pages: "310",
        author: "Dwayne J. Clark",
        release_date: "January 26, 2012",
        wikipedia: "",
        poster: "img/my_mother_my_son.jpg",
        genre: ["Nonfiction", "Biography"]
    },
    {
        isbn: 9781593080419,
        title: "Narrative of the Life of Frederick Douglass, An American Slave",
        overview: "Born a slave in 1818 on a plantation in Maryland, Douglass taught himself to read and write. In 1845, seven years after escaping to the North, he published Narrative, the first of three autobiographies. This book calmly but dramatically recounts the horrors and the accomplishments of his early years—the daily, casual brutality of the white masters; his painful efforts to educate himself; his decision to find freedom or die; and his harrowing but successful escape.",
        pages: "160",
        author: "Frederick Douglass",
        release_date: "January 1, 1845",
        wikipedia: "Narrative_of_the_Life_of_Frederick_Douglass,_an_American_Slave",
        poster: "img/narrative_of_the_life_of_frederick_douglass.jpg",
        genre: ["Nonfiction", "History", "Classics", "Biography", "Memoir", "Autobiography"]
    },
    {
        isbn: 9780061148507,
        title: "Native Son",
        overview: "“If one had to identify the single most influential shaping force in modern Black literary history, one would probably have to point to Wright and the publication of Native Son. ” —Henry Louis Gates Jr. Right from the start, Bigger Thomas had been headed for jail. It could have been for assault or petty larceny; by chance, it was for murder and rape. Native Son tells the story of this young black man caught in a downward spiral after he kills a young white woman in a brief moment of panic. Set in Chicago in the 1930s, Richard Wright's powerful novel is an unsparing reflection on the poverty and feelings of hopelessness experienced by people in inner cities across the country and of what it means to be black in America. This beautifully designed Harper Perennial Deluxe Edition—the restored text of Native Son established by the Library of America—also includes an essay by Wright titled, How \"Bigger\" was Born, along with notes on the text.",
        pages: "544",
        author: "Richard Wright",
        release_date: "March 1, 1940",
        wikipedia: "Native_Son",
        poster: "img/native_son.jpg",
        genre: ["Classics", "Historical Fiction", "African American", "Race", "Literature", "Novels"]
    },
    {
        isbn: 9780691147147,
        title: "Nine Algorithms That Changed the Future: The Ingenious Ideas That Drive Today's Computers",
        overview: "Every day, we use our computers to perform remarkable feats. A simple web search picks out a handful of relevant needles from the world's biggest haystack: the billions of pages on the World Wide Web. Uploading a photo to Facebook transmits millions of pieces of information over numerous error-prone network links, yet somehow a perfect copy of the photo arrives intact. Without even knowing it, we use public-key cryptography to transmit secret information like credit card numbers; and we use digital signatures to verify the identity of the websites we visit. How do our computers perform these tasks with such ease? <p> This is the first book to answer that question in language anyone can understand, revealing the extraordinary ideas that power our PCs, laptops, and smartphones. Using vivid examples, John MacCormick explains the fundamental \"tricks\" behind nine types of computer algorithms, including artificial intelligence (where we learn about the \"nearest neighbor trick\" and \"twenty questions trick\"), Google's famous PageRank algorithm (which uses the \"random surfer trick\"), data compression, error correction, and much more. <p> These revolutionary algorithms have changed our world: this book unlocks their secrets, and lays bare the incredible ideas that our computers use every day.",
        pages: "232",
        author: "John MacCormick",
        release_date: "January 1, 2012",
        wikipedia: "9_Algorithms_That_Changed_the_Future",
        poster: "img/nine_algorithms_that_changed_the_future.jpg",
        genre: ["Computer Science", "Nonfiction", "Science", "Technology", "Programming", "Mathematics", "Computers"]
    },
    {
        isbn: 9780451524935,
        title: "NLP: The New Technology of Achievement",
        overview: "NLP has already helped millions of people overcome fears, increase confidence, enrich relationships, and achieve greater sucess. Now the NLP Comprehensive Training Team has written a book that reveals how to use this breakthrough technology to achieve whatever you want. Short for neuro-linguistic programming, NLP is a revolutionary approach to human communication and development. In NLP: The New Technology of Achievement, you'll be guided step-by-step through specific programs for learning the characeristics of top achievers and creating a blueprint for unlimited sucess. Plus, an all-new twenty-one-day program created especially for this book provides you with the essential skills you'll need to achieve peak performance in business and life.",
        pages: "354",
        author: "Steve Andreas, Charles Faulkner",
        release_date: "January 1, 1994",
        wikipedia: "Steve_Andreas",
        poster: "img/nlp_the_new_technology_of_achievement.jpg",
        genre: ["Psychology", "Nonfiction", "Self Help", "Personal Development", "Communication", "Education", "Reference"]
    },
    {
        isbn: 9780385523905,
        title: "Nothing to Envy: Ordinary Lives in North Korea",
        overview: "Nothing to Envy follows the lives of six North Koreans over fifteen years—a chaotic period that saw the death of Kim Il-sung, the unchallenged rise to power of his son Kim Jong-il, and the devastation of a far-ranging famine that killed one-fifth of the population. <p> Taking us into a landscape most of us have never before seen, award-winning journalist Barbara Demick brings to life what it means to be living under the most repressive totalitarian regime today—an Orwellian world that is by choice not connected to the Internet, in which radio and television dials are welded to the one government station, and where displays of affection are punished; a police state where informants are rewarded and where an offhand remark can send a person to the gulag for life. <p> Demick takes us deep inside the country, beyond the reach of government censors. Through meticulous and sensitive reporting, we see her six subjects—average North Korean citizens—fall in love, raise families, nurture ambitions, and struggle for survival. One by one, we experience the moments when they realize that their government has betrayed them. <p> Nothing to Envy is a groundbreaking addition to the literature of totalitarianism and an eye-opening look at a closed world that is of increasing global importance.",
        pages: "316",
        author: "Barbara Demick",
        release_date: "December 29, 2009",
        wikipedia: "Nothing_to_Envy",
        poster: "img/nothing_to_envy.jpg",
        genre: ["Nonfiction", "History", "Politics", "Asia", "Biography", "Journalism"]
    },
    {
        isbn: 9780316040938,
        title: "On Killing: The Psychological Cost of Learning to Kill in War and Society",
        overview: "In World War II, only 15 to 20 percent of combat infantry were willing to fire their rifles. In Korea, about 50 percent. In Vietnam, the figure rose to more than 90 percent. <p> The good news is that most soldiers are loath to kill. But armies have developed sophisticated ways sophisticated ways of overcoming that instinctive aversion. The psychological cost for soldiers, as evidenced by the increase in post-traumatic stress, is devastating. This landmark study brilliantly illuminates the techniques the military uses to help soldiers kill and raises vital questions about the implications of escalating violence in our society. ",
        pages: "416",
        author: "Dave Grossman",
        release_date: "January 1, 1995",
        wikipedia: "On_Killing",
        poster: "img/on_killing.jpg",
        genre: ["Psychology", "Nonfiction", "Military Fiction", "War", "History", "Science"]
    },
    {
        isbn: 9780140185218,
        title: "On the Road",
        overview: "Few novels have had as profound an impact as On the Road, and Kerouac's vision continues to inspire: three generations of writers, musicians, artists, and poets cite their discovery of On the Road as the event that \"set them free.\" On the Road chronicles Kerouac's years traveling the North American continent, from East Coast to West Coast to Mexico, with his friend Neal Cassady, \"a sideburned hero of the snowy West.\" As \"Sal Paradise\" and \"Dean Moriarty,\" the two roam the country in a quest for self-knowledge and experience. Kerouac's love of America, his compassion for humanity, and his sense of language as jazz combine to make On the Road an inspirational work of lasting importance.",
        pages: "310",
        author: "Jack Kerouac",
        release_date: "September 5, 1957",
        wikipedia: "On_the_Road",
        poster: "img/on_the_road.jpg",
        genre: ["Classics", "Fiction", "Travel", "Literature", "Novels", "American", "Adventure"]
    },
    {
        isbn: 9780684853529,
        title: "On Writing: A Memoir of the Craft",
        overview: "In June of 1999, Stephen King was hit by a van while walking along the shoulder of a country road in Maine. Six operations were required to save his life and mend his broken body. When he was finally able to sit up, he immediately started writing. This book is the extraordinary result. <p> He tells readers about what books and films influenced him as a young writer, his first idea for a story, and the true-life tale that inspired \"Carrie\". For the first time, here's an intimate autobiographical portrait of his home life, his family, and his traumatic accident. Citing examples of his work and those of his contemporaries, King gives an excellent masterclass on writing - how to use the tools of the trade from building characters to pace and plotting as well as practical advice on presentation. And he tells readers how he got to be a No. 1 bestseller for a quarter of a century with fascinating descriptions of his own process, the origins and development of, for example, \"Carrie\" and \"Misery.\"",
        pages: "288",
        author: "Stephen King",
        release_date: "January 1, 2000",
        wikipedia: "On_Writing:_A_Memoir_of_the_Craft",
        poster: "img/on_writing.jpg",
        genre: ["Nonfiction", "Writing", "Memoir", "Biography", "Reference", "Autobiography"]
    },
    {
        isbn: 9780544275393,
        title: "One Child: The Story of China's Most Radical Experiment",
        overview: "An intimate investigation of the world's largest experiment in social engineering, revealing how its effects will shape China for decades to come and what that means for the rest of the world. <p> When Communist Party leaders adopted the one-child policy in 1980, they hoped curbing birthrates would help lift China's poorest and increase the country's global stature. But at what cost? Now, as China closes the book on the policy after over three decades, it faces a population grown too old and too male, with a vastly diminished supply of young workers. <p> Mei Fong has spent years documenting the policy's repercussions on every sector of Chinese society. In One Child, she explores its true human impact, traveling across China to meet the people who live with its consequences. Their stories reveal a dystopian reality: unauthorized second children ignored by the state, only children supporting aging parents and grandparents on their own, villages teeming with ineligible bachelors. Fong tackles questions that have major implications for China's future: whether its Little Emperor cohort will make for an entitled or risk-averse generation; how China will manage to support itself when one in every four people is over sixty-five years old; and above all, how much the one-child policy may end up hindering China's growth. <p> Weaving in Fong's reflections on striving to become a mother herself, One Child offers a nuanced and candid report from the extremes of family planning.",
        pages: "272",
        author: "Mei Fong",
        release_date: "February 2, 2016",
        wikipedia: "Mei_Fong",
        poster: "img/one_child.jpg",
        genre: ["Nonfiction", "China", "History", "Politics", "Sociology", "Asia"]
    },
    {
        isbn: 9780316017923,
        title: "Outliers: The Story of Success",
        overview: "In this stunning book, Malcolm Gladwell takes us on an intellectual journey through the world of \"outliers\"—the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different? <p> His answer is that we pay too much attention to what successful people are like, and too little attention to where they are from: that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band.",
        pages: "309",
        author: "Malcolm Gladwell",
        release_date: "November 18, 2008",
        wikipedia: "Outliers_(book)",
        poster: "img/outliers.jpg",
        genre: ["Nonfiction", "Psychology", "Business", "Self Help", "Sociology", "Science"]
    },
    {
        isbn: 9780972016407,
        title: "Pandering",
        overview: "In a stunningly candid and courageous memoir, the notorious Hollywood Madam tells her own story for the first time. From a lucrative babysitting empire at the age of 13 to a global network of call girls and customers that stretched from Los Angeles to Kuwait, Heidi Fleiss built and ran the most glamorous and obscenely successful sex business in history. Her spectacular rise and fall captivated the country in the early 90's, even as it terrified Hollywood's power elite. Featuring original text, wiretap transcripts, court documents, news clippings, diary excerpts, interviews with hookers, and fantastic original artwork, Heidi tells her story with a fierce regard for the truth. At turns political, passionate, poignant, funny, sexy, angry, outrageous, and wise, Pandering is arguably the bravest and most provocative visual memoir ever published.",
        pages: "240",
        author: "Heidi Fleiss",
        release_date: "January 31, 2003",
        wikipedia: "Heidi_Fleiss",
        poster: "img/pandering.jpg",
        genre: ["Nonfiction", "Biography"]
    },
    {
        isbn: 9780375714573,
        title: "Persepolis: The Story of a Childhood",
        overview: "In powerful black-and-white comic strip images, Satrapi tells the story of her life in Tehran from ages six to fourteen, years that saw the overthrow of the Shah’s regime, the triumph of the Islamic Revolution, and the devastating effects of war with Iraq. The intelligent and outspoken only child of committed Marxists and the great-granddaughter of one of Iran’s last emperors, Marjane bears witness to a childhood uniquely entwined with the history of her country. <p> Persepolis paints an unforgettable portrait of daily life in Iran and of the bewildering contradictions between home life and public life. Marjane’s child’s-eye view of dethroned emperors, state-sanctioned whippings, and heroes of the revolution allows us to learn as she does the history of this fascinating country and of her own extraordinary family. Intensely personal, profoundly political, and wholly original, Persepolis is at once a story of growing up and a reminder of the human cost of war and political repression. It shows how we carry on, with laughter and tears, in the face of absurdity. And, finally, it introduces us to an irresistible little girl with whom we cannot help but fall in love.",
        pages: "153",
        author: "Marjane Satrapi",
        release_date: "April 29, 2003",
        wikipedia: "Persepolis_(comics)",
        poster: "img/persepolis.jpg",
        genre: ["Graphic Novels", "Nonfiction", "Memoir", "Comics", "Biography", "History", "Iran"]
    },
    {
        isbn: 9780375422881,
        title: "Persepolis 2: The Story of a Return",
        overview: "The fascinating continuation of the best-selling Persepolis , “one of the freshest and most original memoirs of our day” ( Los Angeles Times). Marjane Satrapi dazzles with her heartrending graphic memoir about growing up in Iran during the Islamic Revolution. <p> In 1984, Marjane flees fundamentalism and the war with Iraq to begin a new life in Vienna. Once there, she faces the trials of adolescence far from her friends and family, and while she soon carves out a place for herself among a group of fellow outsiders, she continues to struggle for a sense of belonging. <p> Finding that she misses her home more than she can stand, Marjane returns to Iran after graduation. Her difficult homecoming forces her to confront the changes both she and her country have undergone in her absence and her shame at what she perceives as her failure in Austria. Marjane allows her past to weigh heavily on her until she finds some like-minded friends, falls in love, and begins studying art at a university. However, the repression and state-sanctioned chauvinism eventually lead her to question whether she can have a future in Iran. <p> As funny and poignant as its predecessor, Persepolis 2 is another clear-eyed and searing condemnation of the human cost of fundamentalism. In its depiction of the struggles of growing up—here compounded by Marjane’s status as an outsider both abroad and at home—it is raw, honest, and incredibly illuminating.",
        pages: "187",
        author: "Marjane Satrapi",
        release_date: "August 31, 2004",
        wikipedia: "Persepolis_(comics)",
        poster: "img/persepolis_2.jpg",
        genre: ["Graphic Novels", "Nonfiction", "Memoir", "Comics", "Biography", "History", "Iran"]
    },
    {
        isbn: 9780316349369,
        title: "Phenomena: The Secret History of the U.S. Government's Investigations into Extrasensory Perception and Psychokinesis",
        overview: "This is a book about a team of scientists and psychics with top secret clearances. <p> For more than forty years, the U.S. government has researched extrasensory perception, using it in attempts to locate hostages, fugitives, secret bases, and downed fighter jets, to divine other nations' secrets, and even to predict future threats to national security. The intelligence agencies and military services involved include CIA, DIA, NSA, DEA, the Navy, Air Force, and Army-and even the Joint Chiefs of Staff. <p> Now, for the first time, New York Times bestselling author Annie Jacobsen tells the story of these radical, controversial programs, using never before seen declassified documents as well as exclusive interviews with, and unprecedented access to, more than fifty of the individuals involved. Speaking on the record, many for the first time, are former CIA and Defense Department scientists, analysts, and program managers, as well as the government psychics themselves. <p> Who did the U.S. government hire for these top secret programs, and how do they explain their military and intelligence work? How do scientists approach such enigmatic subject matter? What interested the government in these supposed powers and does the research continue? Phenomena is a riveting investigation into how far governments will go in the name of national security.",
        pages: "544",
        author: "Annie Jacobsen",
        release_date: "March 28, 2017",
        wikipedia: "Annie_Jacobsen",
        poster: "img/phenomena.jpg",
        genre: ["Nonfiction", "History", "Science", "Paranormal", "Psychology", "Politics"]
    },
    {
        isbn: 9780099743613,
        title: "Primary Colors: A Novel of Politics",
        overview: "A novel based on an insider's account of Bill Clinton's 1992 presidential campaign. The anonymous author is reported to be someone close to the Clintons.",
        pages: "384",
        author: "Anonymous",
        release_date: "January 16, 1996",
        wikipedia: "Primary_Colors_(novel)",
        poster: "img/primary_colors.jpg",
        genre: ["Fiction", "Politics", "Historical Fiction", "Humor", "Novels", "Contemporary", "Literature"]
    },
    {
        isbn: 9780766169739,
        title: "Public Speaking and Influencing Men in Business",
        overview: "Public Speaking and Influencing Men In Business is a 1937 revision of Dale Carnegie's 1926 book Public Speaking: a Practical Course for Business Men. <p> The main focus of the book is to present a thorough understanding of the principles of public speaking, as well as guidance into conquering the fears attributed to public speaking.",
        pages: "340",
        author: "Dale Carnegie",
        release_date: "January 1, 1935",
        wikipedia: "Public_Speaking_and_Influencing_Men_in_Business",
        poster: "img/public_speaking_and_influencing_men_in_business.jpg",
        genre: ["Business", "Self Help", "Nonfiction", "Leadership", "Communication", "Personal Development"]
    },
    {
        isbn: 9781610396257,
        title: "Raising the Floor: How a Universal Basic Income Can Renew Our Economy and Rebuild the American Dream",
        overview: "Advances in technology are creating the next economy and enabling us to make things/do things/connect with others in smarter, cheaper, faster, more effective ways. But the price of this progress has been a decoupling of the engine of prosperity from jobs that have been the means by which people have ascended to (and stayed in) the middle class. <p> Andy Stern, the former president of the Service Employees International Union (SEIU) spent four years traveling the country and asking economists, futurists, labor leaders, CEOs, investment bankers, entrepreneurs, and political leaders to help picture the U.S. economy 25 to 30 years from now. He vividly reports on people who are analyzing and creating this new economy—such as investment banker Steve Berkenfeld; David Cote, the CEO of Honeywell International; Andy Grove of Intel; Carl Camden, the CEO of Kelly Services; and Geoffrey Canada of the Harlem Children’s Zone. Through these stories, we come to a stark and deeper understanding of the toll technological progress will continue to take on jobs and income and its inevitable effect on tens of millions of people. <p> But there is hope for our economy and future. The foundation of economic prosperity for all Americans, Stern believes, is a universal basic income. The idea of a universal basic income for all Americans is controversial but American attitudes are shifting. Stern has been a game changer throughout his career, and his next goal is to create a movement that will force the political establishment to take action against something that many on both the right and the left believe is inevitable. Stern’s plan is bold, idealistic, and challenging—and its time has come.",
        pages: "272",
        author: "Andy Stern",
        release_date: "June 14, 2016",
        wikipedia: "Andy_Stern",
        poster: "img/raising_the_floor.jpg",
        genre: ["Economics", "Politics", "Nonfiction", "Business", "Technology", "Social Justice", "Money"]
    },
    {
        isbn: 9780307887436,
        title: "Ready Player One",
        overview: "IN THE YEAR 2044, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the OASIS. Wade's devoted his life to studying the puzzles hidden within this world's digital confines, puzzles that are based on their creator's obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them. <p> But when Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade's going to survive, he'll have to win—and confront the real world he's always been so desperate to escape.",
        pages: "374",
        author: "Ernest Cline",
        release_date: "August 16, 2011",
        wikipedia: "Ready_Player_One",
        poster: "img/ready_player_one.jpg",
        genre: ["Science Fiction", "Fiction", "Young Adult", "Fantasy", "Dystopia", "Adventure"]
    },
    {
        isbn: 9781560254614,
        title: "Rebel for the Hell of It: The Life of Tupac Shakur",
        overview: "The ever-controversial Shakur offers a great occasion for a close, passionate reading of rap and ghetto culture. White's understanding of Tupac's art will uncork the bottled up rage and confusion that attends the way hip-hop culture is produced and received. Rebel details each step in Shakur's development, from his early exposure to racism and political activism to his move from New York to the West Coast and his innovative work with early hip hop culture and music. Through connections drawn between Shakur and Public Enemy, Notorious B.I.G., Dr. Dre, Ice Cube, and Sister Souljah, White examines Shakur's life as a prism for the hip-hop world. Photographs, a useful chronology of important dates in the life of Shakur, and an updated discography and filmography of his career as a rapper and actor are included.",
        pages: "252",
        author: "Armond White",
        release_date: "June 1, 1997",
        wikipedia: "Armond_White",
        poster: "img/rebel_for_the_hell_of_it.jpg",
        genre: ["Music", "Hip Hop", "Biography", "Nonfiction", "African American"]
    },
    {
        isbn: 9780446677455,
        title: "Rich Dad, Poor Dad: What the Rich Teach Their Kids about Money – That the Poor and Middle Class Do Not!",
        overview: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
        pages: "207",
        author: "Robert T. Kiyosaki",
        release_date: "April 8, 1997",
        wikipedia: "Rich_Dad_Poor_Dad",
        poster: "img/rich_dad_poor_dad.jpg",
        genre: ["Business", "Finance", "Nonfiction", "Self Help", "Money", "Personal Finance", "Personal Development"]
    },
    {
        isbn: 9780140390155,
        title: "Rights of Man",
        overview: "One of the great classics on democracy, Rights of Man was published in England in 1791 as a vindication of the French Revolution and a critique of the British system of government. In direct, forceful prose, Paine defends popular rights, national independence, revolutionary war, and economic growth - all considered dangerous and even seditious issues. In his introduction Eric Foner presents an overview of Paine's career as political theorist and pamphleteer, and supplies essential background material to Rights of Man. He discusses how Paine created a language of modern politics that brought important issues to the common man and the working classes and assesses the debt owed to Paine by the American and British radical traditions.",
        pages: "288",
        author: "Thomas Paine",
        release_date: "January 1, 1791",
        wikipedia: "Rights_of_Man",
        poster: "img/rights_of_man.jpg",
        genre: ["Philosophy", "Politics", "Nonfiction", "Classics", "History", "American History", "Political Science"]
    },
    {
        isbn: 9780063093621,
        title: "San Fransicko: Why Progressives Ruin Cities",
        overview: "Progressives claimed they knew how to solve homelessness, inequality, and crime. But in cities they control, progressives made those problems worse. <p> Michael Shellenberger has lived in the San Francisco Bay Area for thirty years. During that time, he advocated for the decriminalization of drugs, affordable housing, and alternatives to jail and prison. But as homeless encampments spread, and overdose deaths skyrocketed, Shellenberger decided to take a closer look at the problem. <p> What he discovered shocked him. The problems had grown worse not despite but because of progressive policies. San Francisco and other West Coast cities — Los Angeles, Seattle, Portland — had gone beyond merely tolerating homelessness, drug dealing, and crime to actively enabling them. <p> San Fransicko reveals that the underlying problem isn’t a lack of housing or money for social programs. The real problem is an ideology that designates some people, by identity or experience, as victims entitled to destructive behaviors. The result is an undermining of the values that make cities, and civilization itself, possible.",
        pages: "416",
        author: "Michael Shellenberger",
        release_date: "October 12, 2021",
        wikipedia: "San_Fransicko",
        poster: "img/san_fransicko.jpg",
        genre: ["Politics", "Nonfiction", "History", "Sociology", "Economics", "Society", "Cultural"]
    },
    {
        isbn: 9781591790792,
        title: "Secrets of a Passionate Marriage: How to Increase Sexual Pleasure and Emotional Fulfillment in Committed Relationships",
        overview: "If you think you need to change your marriage, think again. It may well be that your marriage is trying to change you. <p> In Secrets of a Passionate Marriage, Dr. David Schnarch shares a revolutionary approach thousands have used to take their relationships to new and lasting heights of sexual ecstasy and intimacy. Emotionally committed relationships, he teaches, are people-growing machines, and sexual difficulty and other challenges are actually signs of a healthy, maturing relationship. <p> Moving beyond traditional therapies that work a little bit, Dr. Schnarch brings straight talk and humor to his three decades of expertise and offers insights into: <p> Course objectives: <p> Describe the process of differentiation in intimate relationships <p> - Discuss why emotional gridlock is a critical and necessary phase for a healthy relationship <p> - Recommend steps to achieving more passionate sex and a more intimate relationship <p> - Explain how to self-soothe your anxieties and open to the full range of human eroticism <p> - Interpret the psychology of sex <p> Emotional gridlock -- why this critical phase is necessary for the healthy evolution of all relationships <p> - How to self-soothe your anxieties and open to the full range of human eroticism <p> - The psychology of sex -- how to make an ally out of what you're really thinking during sex, and much more <p> With many proven exercises to electrify your sex life, heighten passion, and renew commitment, Secrets of a Passionate Marriage is sure to help your relationship reach its full potential, both in and out of bed.",
        pages: "",
        author: "David Schnarch",
        release_date: "January 1, 2003",
        wikipedia: "David_Schnarch",
        poster: "img/secrets_of_a_passionate_marriage.jpg",
        genre: ["Nonfiction", "Relationships", "Self Help", "Psychology", "Marriage", "Health"]
    },
    {
        isbn: 9780553096064,
        title: "SeinLanguage",
        overview: "Seinfeld. For more than 33 million viewers, the Emmy Award-winning television show has become a Thursday night ritual. Even though the show has ended, Jerry Seinfeld's distinct brand of humor can still be yours. <p> In his #1 New York Times bestselling book, SeinLanguage, Jerry Seinfeld has captured on the page his views on topics ranging from Raisinettes to relationships, from childhood to cop shows, and from parents to power suits. This must-have book for all fans--and who isn't a fan?",
        pages: "180",
        author: "Jerry Seinfeld",
        release_date: "September 1, 1993",
        wikipedia: "SeinLanguage",
        poster: "img/seinlanguage.jpg",
        genre: ["Humor", "Nonfiction", "Comedy", "Biography", "Memoir", "Autobiography", "Comedian"]
    },
    {
        isbn: 9780061707803,
        title: "Sex at Dawn: The Prehistoric Origins of Modern Sexuality",
        overview: "Since Darwin's day, we've been told that sexual monogamy comes naturally to our species. Mainstream science--as well as religious and cultural institutions--has maintained that men and women evolved in families in which a man's possessions and protection were exchanged for a woman's fertility and fidelity. But this narrative is collapsing. Fewer and fewer couples are getting married, and divorce rates keep climbing as adultery and flagging libido drag down even seemingly solid marriages. <p> How can reality be reconciled with the accepted narrative? It can't be, according to renegade thinkers Christopher Ryan and Cacilda Jethá. While debunking almost everything we \"know\" about sex, they offer a bold alternative explanation in this provocative and brilliant book. <p> Ryan and Jethá's central contention is that human beings evolved in egalitarian groups that shared food, child care, and, often, sexual partners. Weaving together convergent, frequently overlooked evidence from anthropology, archaeology, primatology, anatomy, and psychosexuality, the authors show how far from human nature monogamy really is. Human beings everywhere and in every era have confronted the same familiar, intimate situations in surprisingly different ways. The authors expose the ancient roots of human sexuality while pointing toward a more optimistic future illuminated by our innate capacities for love, cooperation, and generosity. <p> With intelligence, humor, and wonder, Ryan and Jethá show how our promiscuous past haunts our struggles over monogamy, sexual orientation, and family dynamics. They explore why long-term fidelity can be so difficult for so many; why sexual passion tends to fade even as love deepens; why many middle-aged men risk everything for transient affairs with younger women; why homosexuality persists in the face of standard evolutionary logic; and what the human body reveals about the prehistoric origins of modern sexuality. <p> In the tradition of the best historical and scientific writing, Sex at Dawn unapologetically upends unwarranted assumptions and unfounded conclusions while offering a revolutionary understanding of why we live and love as we do.",
        pages: "416",
        author: "Christopher Ryan, Cacilda Jethá",
        release_date: "June 29, 2010",
        wikipedia: "Sex_at_Dawn",
        poster: "img/sex_at_dawn.jpg",
        genre: ["Nonfiction", "Science", "History", "Sexuality", "Psychology", "Anthropology", "Relationships"]
    },
    {
        isbn: 199621038,
        title: "Shadow Pact",
        overview: "Elias Graves is one of Seattle's more unusual inhabitants - an immortal ghostspeaker - a modern day necromancer with a knack for finding himself in trouble of one kind or another. And when he isn't busy looking for trouble, it has its own way of finding him. Asked to consult in an unusual murder case by one of Seattle PD's best and brightest, he finds himself hobnobbing with the three most powerful groups in the supernatural underbelly of Washington State - the vampires, the knights, and the mages. Dealing with the undead has become the least of Elias's problems when one man's grief and loss puts him and others in the crosshairs of monsters, demons, and worse yet, some very old, and very powerful entities who want nothing more than to regain their foothold in the world of man.",
        pages: "555",
        author: "Anderson Damian Lucas",
        release_date: "October 5, 2023",
        wikipedia: "",
        poster: "img/shadow_pact.jpg",
        genre: ["Fantasy", "Fiction"]
    },
    {
        isbn: 9780060538255,
        title: "She Comes First: The Thinking Man's Guide to Pleasuring a Woman",
        overview: "Ian Kerner offers a radical new philosophy for pleasuring women in She Comes First—an essential guidebook to oral sex from the author of Be Honest—You’re Not That Into Him Either. The New York Times praises Kerner’s “cool sense of humor and an obsessive desire to inform,” as he “encourages men through an act that many find mystifying.” An indispensable aid to a healthier, more fulfilling sex life for her and him, She Comes First offers techniques and philosophy that have already earned raves from the likes of bestselling author and Loveline co-host Dr. Drew Pinsky as well as Playgirl magazine, which cheers, “Hallelujah!”.",
        pages: "228",
        author: "Ian Kerner",
        release_date: "January 1, 2004",
        wikipedia: "Ian_Kerner",
        poster: "img/she_comes_first.jpg",
        genre: ["Nonfiction", "Sexuality", "Relationships", "Self Help", "Health", "Psychology"]
    },
    {
        isbn: 9781501135910,
        title: "Shoe Dog: A Memoir by the Creator of Nike",
        overview: "In this candid and riveting memoir, for the first time ever, Nike founder and CEO Phil Knight shares the inside story of the company’s early days as an intrepid start-up and its evolution into one of the world’s most iconic, game-changing, and profitable brands. <p> In 1962, fresh out of business school, Phil Knight borrowed $50 from his father and created a company with a simple mission: import high-quality, low-cost athletic shoes from Japan. Selling the shoes from the trunk of his lime green Plymouth Valiant, Knight grossed $8,000 his first year. Today, Nike’s annual sales top $30 billion. In an age of startups, Nike is the ne plus ultra of all startups, and the swoosh has become a revolutionary, globe-spanning icon, one of the most ubiquitous and recognizable symbols in the world today. <p> But Knight, the man behind the swoosh, has always remained a mystery. Now, for the first time, in a memoir that is candid, humble, gutsy, and wry, he tells his story, beginning with his crossroads moment. At 24, after backpacking around the world, he decided to take the unconventional path, to start his own business—a business that would be dynamic, different. <p> Knight details the many risks and daunting setbacks that stood between him and his dream—along with his early triumphs. Above all, he recalls the formative relationships with his first partners and employees, a ragtag group of misfits and seekers who became a tight-knit band of brothers. Together, harnessing the transcendent power of a shared mission, and a deep belief in the spirit of sport, they built a brand that changed everything.",
        pages: "400",
        author: "Phil Knight",
        release_date: "April 24, 2016",
        wikipedia: "Shoe_Dog",
        poster: "img/shoe_dog.jpg",
        genre: ["Business", "Biography", "Nonfiction", "Memoir", "Sports", "Autobiography"]
    },
    {
        isbn: 9781523708376,
        title: "Siddhartha",
        overview: "Herman Hesse's classic novel has delighted, inspired, and influenced generations of readers, writers, and thinkers. In this story of a wealthy Indian Brahmin who casts off a life of privilege to seek spiritual fulfillment. Hesse synthesizes disparate philosophies--Eastern religions, Jungian archetypes, Western individualism--into a unique vision of life as expressed through one man's search for true meaning.",
        pages: "152",
        author: "Herman Hesse",
        release_date: "January 1, 1922",
        wikipedia: "Siddhartha_(novel)",
        poster: "img/siddhartha.jpg",
        genre: ["Classics", "Fiction", "Philosophy", "Spirituality", "Religion", "Literature", "Buddhism"]
    },
    {
        isbn: 9780440180296,
        title: "Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death",
        overview: "Slaughterhouse-Five, an American classic, is one of the world’s great antiwar books. Centering on the infamous World War II firebombing of Dresden, the novel is the result of what Kurt Vonnegut described as a twenty-three-year struggle to write a book about what he had witnessed as an American prisoner of war. It combines historical fiction, science fiction, autobiography, and satire in an account of the life of Billy Pilgrim, a barber’s son turned draftee turned optometrist turned alien abductee. As Vonnegut had, Billy experiences the destruction of Dresden as a POW. Unlike Vonnegut, he experiences time travel, or coming “unstuck in time.” <p> An instant bestseller, Slaughterhouse-Five made Kurt Vonnegut a cult hero in American literature, a reputation that only strengthened over time, despite his being banned and censored by some libraries and schools for content and language. But it was precisely those elements of Vonnegut’s writing—the political edginess, the genre-bending inventiveness, the frank violence, the transgressive wit—that have inspired generations of readers not just to look differently at the world around them but to find the confidence to say something about it. <p> Fifty years after its initial publication at the height of the Vietnam War, Vonnegut's portrayal of political disillusionment, PTSD, and postwar anxiety feels as relevant, darkly humorous, and profoundly affecting as ever, an enduring beacon through our own era’s uncertainties.",
        pages: "215",
        author: "Kurt Vonnegut",
        release_date: "March 31, 1969",
        wikipedia: "Slaughterhouse-Five",
        poster: "img/slaughterhouse_five.jpg",
        genre: ["Fiction", "Science Fiction", "War", "Historical Fiction", "Literature", "Novels"]
    },
    {
        isbn: 9780788160042,
        title: "Sperm Wars: Infidelity, Sexual Conflict, and Other Bedroom Battles",
        overview: "This revolutionary book demonstrates that sexual behavior is driven by neither the psyche nor the conscious mind, but by biological imperatives programmed into us millions of years ago. Argues that a man's sexual behavior is based on the expectation that his sperm will have to compete with other men's sperm to fertilize the descending egg, & women are programmed to promote this sperm warfare. Uses a series of fictional scenes involving some form of sexual contact, followed by an interpretation of each scene from the viewpoint of an evolutionary biologist. Provides a strikingly original & fascinating window into sexual behavior.",
        pages: "375",
        author: "Robin Baker",
        release_date: "January 1, 1996",
        wikipedia: "Sperm_Wars",
        poster: "img/sperm_wars.jpg",
        genre: ["Science", "Nonfiction", "Psychology", "Biology", "Sexuality", "Evolution", "Relationships"]
    },
    {
        isbn: 9780070511132,
        title: "SPIN Selling: Situation Problem Implication Need-payoff",
        overview: "Written by Neil Rackham, former president and founder of Huthwaite corporation, SPIN Selling is essential reading for anyone involved in selling or managing a sales force. Unquestionably the best documented account of sales success ever collected and the result of the Huthwaite corporation's massive 12 year, $1 million dollar research into effective sales performance, this groundbreaking resource details the revolutionary SPIN (Situation, Problem, Implication, Need payoff) strategy. In SPIN Selling, Rackham, who has advised leading companies such as IBM and Honeywell delivers the first book to specifically examine selling high value product and services. By following the simple, practical, and easy to apply techniques of SPIN, readers will be able to dramatically increase their sales volume from major accounts. Rackham answers key questions such as “What makes success in major sales” and “Why do techniques like closing work in small sales but fail in larger ones?” You will learn why traditional sales methods which were developed for small consumer sales, just won't work for large sales and why conventional selling methods are doomed to fail in major sales. Packed with real world examples, illuminating graphics, and informative case studies and backed by hard research data SPIN Selling is the million dollar key to understanding and producing record breaking high end sales performance. Sales Behavior and Sales Success. Obtaining Closing the Sale. Customer Needs in the Major Sale. The SPIN Strategy. Giving Benefits in Major Sales. Preventing Objections. Opening the Call. Turning Theory into Practice.",
        pages: "197",
        author: "Neil Rackham",
        release_date: "January 1, 1988",
        wikipedia: "Neil_Rackham",
        poster: "img/spin_selling.jpg",
        genre: ["Business", "Nonfiction", "Buisness", "Entrepreneurship", "Psychology", "Self Help",  "Personal Development"]
    },
    {
        isbn: 9780681410152,
        title: "Stacked Deck: The Greatest Joker Stories Ever Told",
        overview: "As Batman's archenemy, the Joker is the antithesis of the Dark Knight. Fueled by lunacy, the Clown Prince of Crime thrives in a world of chaos and disorder. In THE GREATEST JOKER STORIES EVER TOLD, the Joker's insanity is displayed in full color. Collecting tales from the last five decades, this book shows that from his earliest appearances to his most recent exploits, he has been a dynamic and deadly adversary. Whether involved in classic campy stories or legendary dark tales, the Joker's insane brilliance has been more than a match for Batman's keen intellect.",
        pages: "352",
        author: "Mike Gold",
        release_date: "November 1, 1990",
        wikipedia: "",
        poster: "img/stacked_deck.jpg",
        genre: ["Comics", "Graphic Novels", "Fiction"]
    },
    {
        isbn: 9780451524935,
        title: "Starship Troopers",
        overview: "The historians can’t seem to settle whether to call this one \"The Third Space War\" (or the fourth), or whether \"The First Interstellar War\" fits it better. We just call it \“The Bug War.\" Everything up to then and still later were \"incidents,\" \"patrols,\" or \"police actions.\" However, you are just as dead if you buy the farm in an \"incident\" as you are if you buy it in a declared war... <p> In one of Robert A. Heinlein’s most controversial bestsellers, a recruit of the future goes through the toughest boot camp in the Universe—and into battle with the Terran Mobile Infantry against mankind’s most alarming enemy.",
        pages: "264",
        author: "Robert A. Heinlein",
        release_date: "December 1, 1959",
        wikipedia: "Starship_Troopers",
        poster: "img/starship_troopers.jpg",
        genre: ["Science Fiction", "Fiction", "Classics", "Military Fiction", "War"]
    },
    {
        isbn: 9781591842804,
        title: "Start with Why: How Great Leaders Inspire Everyone to Take Action",
        overview: "Why are some people and organizations more innovative, more influential, and more profitable than others? Why do some command greater loyalty from customers and employees alike? Even among the successful, why are so few able to repeat their success over and over? <p> People like Martin Luther King Jr., Steve Jobs, and the Wright Brothers might have little in common, but they all started with why. It was their natural ability to start with why that enabled them to inspire those around them and to achieve remarkable things. <p> In studying the leaders who've had the greatest influence in the world, Simon Sinek discovered that they all think, act, and communicate in the exact same way—and it's the complete opposite of what everyone else does. Sinek calls this powerful idea The Golden Circle, and it provides a framework upon which organizations can be built, movements can be lead, and people can be inspired. And it all starts with WHY. <p> Any organization can explain what it does; some can explain how they do it; but very few can clearly articulate why. WHY is not money or profit—those are always results. WHY does your organization exist? WHY does it do the things it does? WHY do customers really buy from one company or another? WHY are people loyal to some leaders, but not others? <p> Starting with WHY works in big business and small business, in the nonprofit world and in politics. Those who start with WHY never manipulate, they inspire. And the people who follow them don't do so because they have to; they follow because they want to. <p> Drawing on a wide range of real-life stories, Sinek weaves together a clear vision of what it truly takes to lead and inspire. This book is for anyone who wants to inspire others or who wants to find someone to inspire them.",
        pages: "256",
        author: "Simon Sinek",
        release_date: "October 29, 2009",
        wikipedia: "Start_with_Why",
        poster: "img/start_with_why.jpg",
        genre: ["Business", "Leadership", "Nonfiction", "Self Help", "Personal Development", "Management", "Psychology"]
    },
    {
        isbn: 9780451524935,
        title: "Strength Training Anatomy",
        overview: "Discover for yourself the magic of Strength Training Anatomy, one of the best-selling strength training books ever published! <p> Get an intricate look at strength training from the inside out. Strength Training Anatomy, with over 850,000 copies already sold, brings anatomy to life with more than 400 full-color illustrations. This detailed artwork showcases the muscles used during each exercise and delineates how these muscles interact with surrounding joints and skeletal structures. Like having an X-ray for each exercise, the information gives you a multilateral view of strength training not seen in any other resource. <p> This bestseller also contains new information on common strength training injuries and preventive measures to help you exercise safely. Chapters are devoted to each major muscle group, with 115 total exercises for arms, shoulders, chest, back, legs, buttocks, and abdomen.",
        pages: "144",
        author: "Frédéric Delavier",
        release_date: "January 1, 1998",
        wikipedia: "",
        poster: "img/strength_training_anatomy.jpg",
        genre: ["Fitness", "Health", "Nonfiction", "Reference", "Sports", "Art", "Science"]
    },
    {
        isbn: 9780393316049,
        title: "Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character",
        overview: "Richard Feynman (1918-1988), winner of the Nobel Prize in physics, thrived on outrageous adventures. Here he recounts in his inimitable voice his experience trading ideas on atomic physics with Einstein and Bohr and ideas on gambling with Nick the Greek; cracking the uncrackable safes guarding the most deeply held nuclear secrets; painting a naked female toreador—and much else of an eyebrow-raising nature. <p> In short, here is Feynman's life in all its eccentric glory—a combustible mixture of high intelligence, unlimited curiosity, and raging chutzpah.",
        pages: "391",
        author: "Richard P. Feynman",
        release_date: "January 1, 1985",
        wikipedia: "Surely_You're_Joking,_Mr._Feynman!",
        poster: "img/surely_youre_joking_mr_feynman.jpg",
        genre: ["Science", "Nonfiction", "Biography", "Physics", "Memoir", "Autobiography", "Humor"]
    },
    {
        isbn: 9780399148750,
        title: "Takedown: The Fall of the Last Mafia Empire",
        overview: "Seldom has the netherworld of the mafia been revealed with such fascinating detail and sheer suspense. Like the classics of the genre-from \"The Godfather\" to \"The French Connection\" to \"Wise Guy\"-\"Takedown\" leads us to the inner ring of a conspiracy of corruption and terror that held the city in its grip for nearly fifty years. <p> Rick Cowan was a young NYPD detective in 1992 when he dropped by a Brooklyn waterfront warehouse to investigate a recent fire bombing-only one in a string of interviews he considered routine. But what he found there was far from routine, for it would take him on a five-year odyssey and nearly cost him his life. In fact, he had stumbled upon the lead of a lifetime-the suspicion that he might unearth the hard evidence police and federal agencies alike had been chasing for decades: the proof of collusion among the mob families to extort billions from the nation's most influential corporations that call New York their home. <p> Featuring eccentric, larger-than-life New York characters and an undercover cop on the brink of being discovered-and murdered-at every step, \"Takedown\" is a riveting real-life procedural and one of the most important investigative books of the season.",
        pages: "352",
        author: "Douglas Century",
        release_date: "January 1, 2002",
        wikipedia: "Douglas_Century",
        poster: "img/takedown.jpg",
        genre: ["Nonfiction", "True Crime", "Crime", "History"]
    },
    {
        isbn: 9780743215367,
        title: "Tesla: Man Out of Time",
        overview: "In this “informative and delightful” ( American Scientist ) biography, Margaret Cheney explores the brilliant and prescient mind of Nikola Tesla, one of the twentieth century’s greatest scientists and inventors. <p> In Man Out of Time, Margaret Cheney explores the brilliant and prescient mind of one of the twentieth century's greatest scientists and inventors. Called a madman by his enemies, a genius by others, and an enigma by nearly everyone, Nikola Tesla was, without a doubt, a trailblazing inventor who created astonishing, sometimes world-transforming devices that were virtually without theoretical precedent. Tesla not only discovered the rotating magnetic field -- the basis of most alternating-current machinery -- but also introduced us to the fundamentals of robotics, computers, and missile science. Almost supernaturally gifted, unfailingly flamboyant and neurotic, Tesla was troubled by an array of compulsions and phobias and was fond of extravagant, visionary experimentations. He was also a popular man-about-town, admired by men as diverse as Mark Twain and George Westinghouse, and adored by scores of society beauties. <p> From Tesla's childhood in Yugoslavia to his death in New York in the 1940s, Cheney paints a compelling human portrait and chronicles a lifetime of discoveries that radically altered -- and continue to alter -- the world in which we live. Man Out of Time is an in-depth look at the seminal accomplishments of a scientific wizard and a thoughtful examination of the obsessions and eccentricities of the man behind the science.",
        pages: "416",
        author: "Margaret Cheney",
        release_date: "January 1, 1981",
        wikipedia: "Tesla:_Man_Out_of_Time",
        poster: "img/tesla.jpg",
        genre: ["Biography", "Nonfiction", "Science", "History", "Technology"]
    },
    {
        isbn: 9780061774607,
        title: "The 50th Law",
        overview: "In The 50th Law, hip hop and pop culture icon 50 Cent (aka Curtis Jackson) joins forces with Robert Greene, bestselling author of The 48 Laws of Power, to write a bible for success in life and work based on a single principle: fear nothing. <p> With intimate stories from 50 Cent's life on the streets and in the boardroom as he rose to fame after the release of his album Get Rich or Die Tryin, as well as examples of others who have overcome adversity through understanding and practicing The 50th Law, this deeply inspirational book is perfect for entrepreneurs as well as anyone interested in the extraordinary life of Curtis Jackson.",
        pages: "291",
        author: "50 Cent, Robert Greene",
        release_date: "October 1, 2008",
        wikipedia: "The_50th_Law",
        poster: "img/the_50th_law.jpg",
        genre: ["Self Help", "Business", "Nonfiction", "Psychology", "Philosophy", "Biography", "Personal Development"]
    },
    {
        isbn: 9780061122415,
        title: "The Alchemist",
        overview: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different, and far more satisfying, listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
        pages: "197",
        author: "Paulo Coelho",
        release_date: "January 1, 1988",
        wikipedia: "The_Alchemist_(novel)",
        poster: "img/the_alchemist.jpg",
        genre: ["Fiction", "Classics", "Fantasy", "Philosophy", "Novels", "Spirituality", "Self Help"]
    },
    {
        isbn: 9780451524935,
        title: "The America We Deserve",
        overview: "The essential, bestselling book that first defined President Donald Trump's political ideas. <p> The America We Deserve is the essential book for anyone who wants to understand the core of Donald Trump's political thinking. In this book, written as he first considered running for president in 2000, Trump offers no-nonsense, populist, provocative, and dramatic solutions to issues that continue to resonate with voters today. <p> In this book, Trump lays out a vision for America that is strong, optimistic, and founded on core Republican principles of self-reliance, limited governance, economic growth, and equitable taxation. Striking for its similarities to President Trump's current initiatives--but also fascinating in its differences-- The America We Deserve reveals a man who is fully engaged with the nation and cares deeply about its future. Readers and voters will discover Trump's ideas on: <p> *Foreign policy and relations with China, Russia, North Korea, and Israel <p> *How to fix our broken and underperfoming education system <p> *Reducing regulations on business to help create jobs and economic growth <p> *A dramatic one-time tax on the super-wealthy to close the national debt and fuel tax cuts for the middle class <p> *Immigration, crime, terrorism, and more <p> The America We Deserve is essential reading for Trump-watchers, voters, Republicans, Democrats, and anyone interested in how Trump the businessman became Trump the president.",
        pages: "304",
        author: "Donald J. Trump",
        release_date: "January 1, 2000",
        wikipedia: "The_America_We_Deserve",
        poster: "img/the_america_we_deserve.jpg",
        genre: ["Politics", "Nonfiction", "Leadership", "Sociology", "Business", "Government"]
    },
    {
        isbn: 9780316380508,
        title: "The Art of Invisibility: The World's Most Famous Hacker Teaches You How to Be Safe in the Age of Big Brother and Big Data",
        overview: "Like it or not, your every move is being watched and analyzed. Consumer's identities are being stolen, and a person's every step is being tracked and stored. What once might have been dismissed as paranoia is now a hard truth, and privacy is a luxury few can afford or understand. <p> In this explosive yet practical book, Kevin Mitnick illustrates what is happening without your knowledge--and he teaches you \"the art of invisibility.\" Mitnick is the world's most famous--and formerly the Most Wanted--computer hacker. He has hacked into some of the country's most powerful and seemingly impenetrable agencies and companies, and at one point he was on a three-year run from the FBI. Now, though, Mitnick is reformed and is widely regarded as the expert on the subject of computer security. He knows exactly how vulnerabilities can be exploited and just what to do to prevent that from happening. <p> In THE ART OF INVISIBILITY Mitnick provides both online and real life tactics and inexpensive methods to protect you and your family, in easy step-by-step instructions. He even talks about more advanced \"elite\" techniques, which, if used properly, can maximize your privacy. Invisibility isn't just for superheroes--privacy is a power you deserve and need in this modern age.",
        pages: "320",
        author: "Kevin D. Mitnick, Robert Vamosi",
        release_date: "February 14, 2017",
        wikipedia: "Kevin_Mitnick",
        poster: "img/the_art_of_invisibility.jpg",
        genre: ["Nonfiction", "Technology", "Science", "Computer Science", "Computers"]
    },
    {
        isbn: 9781861977694,
        title: "The Art of Seduction",
        overview: "The Art of Seduction is a masterful synthesis of the work of thinkers such as Freud, Ovid, Kierkegaard, and Einstein, as well as the achievements of the greatest seducers throughout history. From Cleopatra to John F. Kennedy, from Andy Warhol to Josephine Bonaparte, The Art of Seduction gets to the heart of the character of the seducer and his or her tactics, triumphs and failures. The seducer's many faces include: the Siren, the Rake, the Ideal Lover, the Dandy, the Natural, the Coquette, the Charmer, and the Charismatic. Twenty-four maneuvers will guide readers through the seduction process, providing cunning, amoral instructions for and analysis of this fascinating, all-pervasive form of power. Just as beautifully packaged and every bit as essential as The 48 Laws of Power, The Art of Seduction is an indispensable primer of persuasion and offers the best lessons on how to take what you want from whomever you want or how to prevent yourself from being taken.",
        pages: "466",
        author: "Robert Greene",
        release_date: "January 1, 2001",
        wikipedia: "The_Art_of_Seduction",
        poster: "img/the_art_of_seduction.jpg",
        genre: ["Psychology", "onfiction", "Self Help", "Philosophy", "Relationships", "Personal Development", "Business"]
    },
    {
        isbn: 9780877734529,
        title: "The Art of War",
        overview: "Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life. The Art of War is a book which should be used to gain advantage of opponents in the boardroom and battlefield alike.",
        pages: "273",
        author: "Sun Tzu, Thomas Cleary",
        release_date: "January 1, 1988",
        wikipedia: "The_Art_of_War",
        poster: "img/the_art_of_war.jpg",
        genre: ["Classics", "Nonfiction", "Philosophy", "History", "War", "Politics", "Business"]
    },
    {
        isbn: 28365035,
        title: "The Assassination Complex: Inside the Government's Secret Drone Warfare Program",
        overview: "“A searing, facts-driven indictment of America’s drone wars and their implications for US democracy and foreign policy. A must-read for concerned citizens” (Library Journal, starred review) from bestselling author Jeremy Scahill and his colleagues at the investigative website The Intercept. <p> Drones are a tool, not a policy. The policy is assassination. But drone strikes often kill people other than the intended target. These deaths, which have included women and children, dwarf the number of actual combatants who have been assassinated by drones. They have generated anger toward the United States among foreign populations and have even become a recruiting tool for jihadists. <p> The first drone strike outside a declared war zone was conducted more than twelve years ago, but it was not until May 2013 that the White House released a set of standards and procedures for conducting such strikes. However, there was no explanation of the internal process used to determine whether a suspect should be killed without being indicted or tried, even if that suspect is an American citizen. The implicit message of the Obama administration has been: Trust, but don’t verify. <p> The Assassination Complex reveals stunning details of the government’s secretive drone warfare program based on documents supplied by a confidential source in the intelligence community. These documents make it possible to begin the long-overdue debate about the policy of drone warfare and how it is conducted. The Assassination Complex allows us to understand at last the circumstances under which the US government grants itself the right to sentence individuals to death without the established checks and balances of arrest, trial, and appeal—“readers will be left in no doubt that drone warfare affronts morality and the Constitution” (Kirkus Reviews).",
        pages: "256",
        author: "Jeremy Scahill, The Staff of The Intercept",
        release_date: "May 3, 2016",
        wikipedia: "Jeremy_Scahill",
        poster: "img/the_assassination_complex.jpg",
        genre: ["Nonfiction", "Politics", "History", "War", "Military Fiction", "Technology"]
    },
    {
        isbn: 9780743255066,
        title: "The Autobiography of Benjamin Franklin",
        overview: "Written initially to guide his son, Benjamin Franklin’s autobiography is a lively, spellbinding account of his unique and eventful life, now a classic of world literature that is sure to inspire and delight readers everywhere. <p> Few men could compare to Benjamin Franklin. Virtually self-taught, he excelled as an athlete, a man of letters, a printer, a scientist, a wit, an inventor, an editor, and a writer, and he was probably the most successful diplomat in American history. David Hume hailed him as the first great philosopher and great man of letters in the New World.",
        pages: "143",
        author: "Benjamin Franklin",
        release_date: "January 1, 1791",
        wikipedia: "The_Autobiography_of_Benjamin_Franklin",
        poster: "img/the_autobiography_of_benjamin_franklin.jpg",
        genre: ["Biography", "History", "Nonfiction", "Classics", "Autobiography", "Memoir", "American History"]
    },
    {
        isbn: 9780345350688,
        title: "The Autobiography of Malcolm X",
        overview: "Through a life of passion and struggle, Malcolm X became one of the most influential figures of the 20th Century. In this riveting account, he tells of his journey from a prison cell to Mecca, describing his transition from hoodlum to Muslim minister. Here, the man who called himself \"the angriest Black man in America\" relates how his conversion to true Islam helped him confront his rage and recognize the brotherhood of all mankind. <p> An established classic of modern America, \"The Autobiography of Malcolm X\" was hailed by the New York Times as \"Extraordinary. A brilliant, painful, important book.\" Still extraordinary, still important, this electrifying story has transformed Malcolm X's life into his legacy. The strength of his words, and the power of his ideas continue to resonate more than a generation after they first appeared.",
        pages: "466",
        author: "Malcolm X, Alex Haley",
        release_date: "October 29, 1965",
        wikipedia: "The_Autobiography_of_Malcolm_X",
        poster: "img/the_autobiography_of_malcolm_x.jpg",
        genre: ["Nonfiction", "Biography", "Autobiography", "Memoir", "History", "Politics", "Race"]
    },
    {
        isbn: 9780385546478,
        title: "The Basic Laws of Human Stupidity",
        overview: "\"A masterly book\" --Nassim Nicholas Taleb, author of The Black Swan <p> \"A classic\" --Simon Kuper, Financial Times <p> In the spirit of On Bullshit and Assholes: A Theory, an economist explores the five laws that confirm our worst fears: stupid people can and do rule the world <p> Since time immemorial, a powerful dark force has hindered the growth of human welfare and happiness. It is more powerful than the Mafia or the military. It has global catastrophic effects and can be found anywhere from the world's most powerful boardrooms to your local pub. This is the immensely powerful force of human stupidity. <p> Seeing the shambolic state of human affairs, and sensing the dark force at work behind it, Carlo M. Cipolla, the late, noted professor of economic history at the University of California, Berkeley, created a vitally important economic model that would allow us to detect, know, and neutralize this threat: The Basic Laws of Human Stupidity. <p> If you've ever found yourself despairing at the ubiquity of stupidity among even the most 'intellectual' of people, then this hilarious, timely, and slightly alarming little book is for you. Arm yourself in the face of baffling political realities, unreasonable colleagues, or the unbridled misery of Christmas day with the in-laws with the first and only economic model for stupidity. <p> \"Cipolla's subtle tongue-in-cheek humor made this book an underground classic in Italy. Today, under current worldwide political trends, it reads more like black humor. Keep in mind: reliable statistical data shows that 98% of the people seriously believe that they are far less stupid than the average.\" --Carlo Rovelli, author of Seven Brief Lessons on Physics",
        pages: "96",
        author: "Carlo M. Cipolla",
        release_date: "January 1, 1976",
        wikipedia: "Carlo_M._Cipolla",
        poster: "img/the_basic_laws_of_human_stupidity.jpg",
        genre: ["Nonfiction", "Philosophy", "Humor", "Psychology", "Economics", "Essays", "History"]
    },
    {
        isbn: 9780399589652,
        title: "The Beautiful Ones",
        overview: "Prince was a musical genius, one of the most talented, beloved, accomplished, popular, and acclaimed musicians in history. He was also a startlingly original visionary with an imagination deep enough to whip up whole worlds, from the sexy, gritty funk paradise of “Uptown” to the mythical landscape of Purple Rain to the psychedelia of “Paisley Park.” But his most ambitious creative act was turning Prince Rogers Nelson, born in Minnesota, into Prince, the greatest pop star of his era. <p> The Beautiful Ones is the story of how Prince became Prince—a first-person account of a kid absorbing the world around him and then creating a persona, an artistic vision, and a life, before the hits and fame that would come to define him. The book is told in four parts. The first is composed of the memoir he was writing before his tragic death, pages that brings us into Prince’s childhood world through his own lyrical prose. The second part takes us into Prince’s early years as a musician, before his first album released, through a scrapbook of Prince’s writing and photos. The third section shows us Prince’s evolution through candid images that take us up to the cusp of his greatest achievement, which we see in the book’s fourth section: his original handwritten treatment for Purple Rain—the final stage in Prince’s self-creation, as he retells the autobiography we’ve seen in the first three parts as a heroic journey. <p> The book is framed by editor Dan Piepenbring’s riveting and moving introduction about his short but profound collaboration with Prince in his final months—a time when Prince was thinking deeply about how to reveal more of himself and his ideas to the world, while retaining the mystery and mystique he’d so carefully cultivated—and annotations that provide context to each of the book’s images. <p> This work is not just a tribute to Prince, but an original and energizing literary work, full of Prince’s ideas and vision, his voice and image, his undying gift to the world.",
        pages: "280",
        author: "Prince",
        release_date: "October 29, 2019",
        wikipedia: "Prince_(musician)",
        poster: "img/the_beautiful_ones.jpg",
        genre: ["Music", "Nonfiction", "Biography", "Memoir", "Autobiography"]
    },
    {
        isbn: 9781982107291,
        title: "The Bomb: Presidents, Generals, and the Secret History of Nuclear War",
        overview: "From the author the classic The Wizards of Armageddon and Pulitzer Prize finalist comes the definitive history of American policy on nuclear war—and Presidents’ actions in nuclear crises—from Truman to Trump. <p> Fred Kaplan, hailed by The New York Times as “a rare combination of defense intellectual and pugnacious reporter,” takes us into the White House Situation Room, the Joint Chiefs of Staff’s “Tank” in the Pentagon, and the vast chambers of Strategic Command to bring us the untold stories—based on exclusive interviews and previously classified documents—of how America’s presidents and generals have thought about, threatened, broached, and just barely avoided nuclear war from the dawn of the atomic age until today. <p> Kaplan’s historical research and deep reporting will stand as the permanent record of politics. Discussing theories that have dominated nightmare scenarios from Hiroshima and Nagasaki, Kaplan presents the unthinkable in terms of mass destruction and demonstrates how the nuclear war reality will not go away, regardless of the dire consequences.",
        pages: "384",
        author: "Fred Kaplan",
        release_date: "January 28, 2020",
        wikipedia: "Fred_Kaplan_(journalist)",
        poster: "img/the_bomb.jpg",
        genre: ["History", "Nonfiction", "Politics", "War", "Military History", "American History", "Science"]
    },
    {
        isbn: 9780451524935,
        title: "The Catcher in the Rye",
        overview: "It's Christmas time and Holden Caulfield has just been expelled from yet another school... <p> Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning. <p> The Catcher in the Rye is an all-time classic in coming-of-age literature- an elegy to teenage alienation, capturing the deeply human need for connection and the bewildering sense of loss as we leave childhood behind. <p> J.D. Salinger's (1919–2010) classic novel of teenage angst and rebellion was first published in 1951. The novel was included on Time's 2005 list of the 100 best English-language novels written since 1923. It was named by Modern Library and its readers as one of the 100 best English-language novels of the 20th century. It has been frequently challenged in the court for its liberal use of profanity and portrayal of sexuality and in the 1950's and 60's it was the novel that every teenage boy wants to read.",
        pages: "234",
        author: "J.D. Salinger",
        release_date: "July 16, 1951",
        wikipedia: "The_Catcher_in_the_Rye",
        poster: "img/the_catcher_in_the_rye.jpg",
        genre: ["Classics", "Fiction", "Young Adult", "Literature", "Novels"]
    },
    {
        isbn: 9780740748479,
        title: "The Complete Calvin and Hobbes",
        overview: "Calvin and Hobbes is unquestionably one of the most popular comic strips of all time. The imaginative world of a boy and his real-only-to-him tiger was first syndicated in 1985 and appeared in more than 2,400 newspapers when Bill Watterson retired on January 1, 1996. The entire body of Calvin and Hobbes cartoons published in a truly noteworthy tribute to this singular cartoon in The Complete Calvin and Hobbes. Composed of three hardcover, four-color volumes in a sturdy slipcase, this New York Times best-selling edition includes all Calvin and Hobbes cartoons that ever appeared in syndication. This is the treasure that all Calvin and Hobbes fans seek.",
        pages: "1456",
        author: "Bill Watterson",
        release_date: "September 6, 2005",
        wikipedia: "Calvin_and_Hobbes",
        poster: "img/the_complete_calvin_and_hobbes.jpg",
        genre: [""]
    },
    {
        isbn: 9780681409699,
        title: "The Complete Frank Miller Batman",
        overview: "The Complete Frank Miller Batman contains: Batman Year One, Wanted: Santa Claus Dead Or Alive and The Dark Knight Returns. With a new introduction by Richard Bruning, then DC design director. Batman Year One and The Dark Knight Returns are reprints of their trade paperbacks and not individual issues so they include the introductions to those volumes by Frank Miller and Alan Moore. Wanted: Santa Claus Dead Or Alive comes from DC Super Star Holiday Special 21.",
        pages: "312",
        author: "Frank Miller",
        release_date: "December 1, 1989",
        wikipedia: "Batman:_Year_One",
        poster: "img/the_complete_frank_miller_batman.jpg",
        genre: ["Graphic Novels", "Comics", "Fiction"]
    },
    {
        isbn: 9781593157135,
        title: "The Compound Effect",
        overview: "The New York Times and Wall Street Journal bestseller, based on the principle that little, everyday decisions will either take you to the life you desire or to disaster by default. <p> No gimmicks. No Hyperbole. No Magic Bullet. The Compound Effect is a distillation of the fundamental principles that have guided the most phenomenal achievements in business, relationships, and beyond. This easy-to-use, step-by-step operating system allows you to multiply your success, chart your progress, and achieve any desire. If you're serious about living an extraordinary life, use the power of The Compound Effect to create the success you want. You will find strategies",
        pages: "192",
        author: "Darren Hardy",
        release_date: "January 1, 2010",
        wikipedia: "Darren_Hardy",
        poster: "img/the_compound_effect.jpg",
        genre: ["Self Help", "usiness", "Nonfiction", "Personal Development", "Productivity", "Finance", "Psychology"]
    },
    {
        isbn: 9780062512666,
        title: "The Cube",
        overview: "Describes an ancient visualization game that provides insight into the understanding of the self and relationships",
        pages: "204",
        author: "Annie Gottlieb, Slobodan D. Pesic",
        release_date: "September 8, 1995",
        wikipedia: "Kokology",
        poster: "img/the_cube.jpg",
        genre: ["Nonfiction", "Psychology", "Philosophy", "Games", "Self Help"]
    },
    {
        isbn: 9780804176989,
        title: "The Culture Code: The Secrets of Highly Successful Groups",
        overview: "What do Pixar, Google and the San Antonio Spurs basketball team have in common? <p> The answer is that they all owe their extraordinary success to their team-building skills. In The Culture Code, Daniel Coyle goes inside some of the most effective organisations in the world and reveals their secrets. He not only explains what makes such groups tick, but also identifies the key factors that can generate team cohesion in any walk of life. He examines the verbal and physical cues that bring people together. He determines specific strategies that encourage collaboration and build trust. And he offers cautionary tales of toxic cultures and advises how to reform them, above all demonstrating the extraordinary achievements that result when we know how to cooperate effectively.",
        pages: "304",
        author: "Daniel Coyle",
        release_date: "September 5, 2017",
        wikipedia: "",
        poster: "img/the_culture_code.jpg",
        genre: ["Business", "Nonfiction", "Leadership", "Management", "Psychology", "Self Help", "Cultural"]
    },
    {
        isbn: 9780451524935,
        title: "The Da Vinci Code",
        overview: "While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of da Vinci…clues visible for all to see…and yet ingeniously disguised by the painter. <p> Langdon joins forces with a gifted French cryptologist, Sophie Neveu, and learns the late curator was involved in the Priory of Sion—an actual secret society whose members included Sir Isaac Newton, Botticelli, Victor Hugo, and da Vinci, among others. The Louvre curator has sacrificed his life to protect the Priory’s most sacred trust: the location of a vastly important religious relic, hidden for centuries. <p> In a breathless race through Paris, London, and beyond, Langdon and Neveu match wits with a faceless powerbroker who appears to work for Opus Dei—a clandestine, Vatican-sanctioned Catholic sect believed to have long plotted to seize the Priory’s secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle in time, the Priory’s secret—and a stunning historical truth—will be lost forever. <p> In an exhilarating blend of relentless adventure, scholarly intrigue, and cutting wit, symbologist Robert Langdon (first introduced in Dan Brown’s bestselling Angels & Demons) is the most original character to appear in years. The Da Vinci Code heralds the arrival of a new breed of lightning-paced, intelligent thriller…surprising at every twist, absorbing at every turn, and in the end, utterly unpredictable…right up to its astonishing conclusion.",
        pages: "454",
        author: "Dan Brown",
        release_date: "March 18, 2003",
        wikipedia: "The_Da_Vinci_Code",
        poster: "img/the_da_vinci_code.jpg",
        genre: ["Fiction", "Mystery", "Thriller", "Historical Fiction", "Suspense", "Adventure"]
    },
    {
        isbn: 9780553804720,
        title: "The Definitive Book of Body Language",
        overview: "Available for the first time in the United States, this international bestseller reveals the secrets of nonverbal communication to give you confidence and control in any face-to-face encounter–from making a great first impression and acing a job interview to finding the right partner. <p> It is a scientific fact that people’s gestures give away their true intentions. Yet most of us don’t know how to read body language–and don’t realize how our own physical movements speak to others. Now the world’s foremost experts on the subject share their techniques for reading body language signals to achieve success in every area of life. <p> Drawing upon more than thirty years in the field, as well as cutting-edge research from evolutionary biology, psychology, and medical technologies that demonstrate what happens in the brain, the authors examine each component of body language and give you the basic vocabulary to read attitudes and emotions through behavior. <p> Discover: <p> • How palms and handshakes are used to gain control <p> • The most common gestures of liars <p> • How the legs reveal what the mind wants to do <p> • The most common male and female courtship gestures and signals <p> • The secret signals of cigarettes, glasses, and makeup <p> • The magic of smiles–including smiling advice for women <p> • How to use nonverbal cues and signals to communicate more effectively and get the reactions you want <p> Filled with fascinating insights, humorous observations, and simple strategies that you can apply to any situation, this intriguing book will enrich your communication with and understanding of others–as well as yourself.",
        pages: "400",
        author: "Allan Pease, Barbara Pease",
        release_date: "January 1, 1994",
        wikipedia: "Allan_Pease",
        poster: "img/the_definitive_book_of_body_language.jpg",
        genre: ["Psychology", "Nonfiction", "Self Help", "Communication", "Business", "Personal Development", "Science"]
    },
    {
        isbn: 9780451524935,
        title: "The Diary of a Young Girl",
        overview: "Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit. <p> In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.",
        pages: "283",
        author: "Anne Frank",
        release_date: "January 1, 1947",
        wikipedia: "The_Diary_of_a_Young_Girl",
        poster: "img/the_diary_of_a_young_girl.jpg",
        genre: ["Classics", "History", "Nonfiction", "Biography", "Memoir", "Historical"]
    },
    {
        isbn: 9780812993424,
        title: "The Divide: American Injustice in the Age of the Wealth Gap",
        overview: "Over the last two decades, America has been falling deeper and deeper into a statistical mystery: Poverty goes up. Crime goes down. The prison population doubles. Fraud by the rich wipes out 40 percent of the world's wealth. The rich get massively richer. No one goes to jail. <p> In search of a solution, journalist Matt Taibbi discovered the Divide, the seam in American life where our two most troubling trends--growing wealth inequality and mass incarceration--come together, driven by a dramatic shift in American citizenship: Our basic rights are now determined by our wealth or poverty. The Divide is what allows massively destructive fraud by the hyperwealthy to go unpunished, while turning poverty itself into a crime--but it's impossible to see until you look at these two alarming trends side by side.",
        pages: "416",
        author: "Matt Taibbi",
        release_date: "April 3, 2014",
        wikipedia: "The_Divide:_American_Injustice_in_the_Age_of_the_Wealth_Gap",
        poster: "img/the_divide.jpg",
        genre: ["Nonfiction", "Politics", "Economics", "History", "Social Justice", "Sociology", "Journalism"]
    },
    {
        isbn: 9780451524935,
        title: "The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It",
        overview: "E-Myth \ 'e-,'mith\ n 1: the entrepreneurial myth: the myth that most people who start small businesses are entrepreneurs 2: the fatal assumption that an individual who understands the technical work of a business can successfully run a business that does that technical work. Voted #1 business book by Inc. 500 CEOs. An instant classic, this revised and updated edition of the phenomenal bestseller dispels the myths about starting your own business. Small business consultant and author Michael E. Gerber, with sharp insight gained from years of experience, points out how common assumptions, expectations, and even technical expertise can get in the way of running a successful business. Gerber walks you through the steps in the life of a business—from entrepreneurial infancy through adolescent growing pains to the mature entrepreneurial perspective: the guiding light of all businesses that succeed—and shows how to apply the lessons of franchising to any business, whether or not it is a franchise. Most importantly, Gerber draws the vital, often overlooked distinction between working on your business and working in your business. The E-Myth Revisited will help you grow your business in a productive, assured way.",
        pages: "288",
        author: "Michael E. Gerber",
        release_date: "September 1, 1985",
        wikipedia: "Michael_Gerber_(non-fiction_writer)",
        poster: "img/the_e-myth_revisited.jpg",
        genre: ["Business", "Nonfiction", "Entrepreneurship", "Self Help", "Buisness", "Leadership", "Management"]
    },
    {
        isbn: 9780743289757,
        title: "The Education of a Very Young Madam",
        overview: "A stripper at age fifteen, involved with majorleague gang members before she was twenty, and a madam raking in over $20,000 a day only a few years later, Ma-Ling Lee has a tale to tell about life. <p> The Education of a Very Young Madam is the compulsively readable, fast-paced story of how Ma-Ling Lee went from living in a comfortable Connecticut suburb to founding a lucrative but illegal \"escort service.\" <p> Korean born and adopted by an American family, Ma-Ling began her career in the sex business at the age of thirteen. \"Taken in\" by strippers, pimps, and prostitutes, she soon became an expert at negotiating the hard-and-fast ways of life on the streets. <p> Ma-Ling's natural knack for marketing and managing a business led her to open her first brothel at the age of sixteen. After the police shut her down, she knew it was time to take advantage of the opportunities afforded by the anonymity of the Internet. She bought her first Internet mailing list, set up an offshore server, and targeted a huge middleclass clientele. <p> And business thrived. <p> In her own frank and candid voice, Ma-Ling describes the difficulties -- and the economic advantages -- of running an illegal business. From clients' outrageous and often hilarious fetishes to the hardships of living off the grid to the heartbreak of watching friends get destroyed by drug addiction, Ma-Ling refuses to shy away from the truth of what the prostitution business has become. The madam explains how technology has not only revolutionized the sex industry but also regulated business by ensuring quality, safety, and efficiency. <p> The business has never been better.",
        pages: "224",
        author: "Ma-Ling Lee",
        release_date: "January 1, 2008",
        wikipedia: "",
        poster: "img/the_education_of_a_very_young_madam.jpg",
        genre: ["Nonfiction", "Memoir", "Biography", "Sexuality"]
    },
    {
        isbn: 9780826328090,
        title: "The Education of Little Tree",
        overview: "The Education of Little Tree tells of a boy orphaned very young, who is adopted by his Cherokee grandmother and half-Cherokee grandfather in the Appalachian mountains of Tennessee during the Great Depression. Little Tree as his grandparents call him is shown how to hunt and survive in the mountains, to respect nature in the Cherokee Way, taking only what is needed, leaving the rest for nature to run its course. Little Tree also learns the often callous ways of white businessmen and tax collectors, and how Granpa, in hilarious vignettes, scares them away from his illegal attempts to enter the cash economy. Granma teaches Little Tree the joys of reading and education. But when Little Tree is taken away by whites for schooling, we learn of the cruelty meted out to Indian children in an attempt to assimilate them and of Little Tree's perception of the Anglo world and how it differs from the Cherokee Way. A classic of its era, and an enduring book for all ages, The Education of Little Tree has now been redesigned for this twenty-fifth anniversary edition.",
        pages: "216",
        author: "Forrest Carter",
        release_date: "January 1, 1976",
        wikipedia: "The_Education_of_Little_Tree",
        poster: "img/the_education_of_little_tree.jpg",
        genre: ["Fiction", "Historical Fiction", "Young Adult", "Classics", "American"]
    },
    {
        isbn: 9780008340926,
        title: "The End is Always Near: Apocalyptic Moments, from the Bronze Age Collapse to Nuclear Near Misses",
        overview: "The creator of the wildly popular award-winning podcast Hardcore History looks at some of the apocalyptic moments from the past as a way to frame the challenges of the future. <p> Do tough times create tougher people? Can humanity handle the power of its weapons without destroying itself? Will human technology or capabilities ever peak or regress? No one knows the answers to such questions, but no one asks them in a more interesting way than Dan Carlin. <p> In The End is Always Near, Dan Carlin looks at questions and historical events that force us to consider what sounds like fantasy; that we might suffer the same fate that all previous eras did. Will our world ever become a ruin for future archaeologists to dig up and explore? The questions themselves are both philosophical and like something out of The Twilight Zone. <p> Combining his trademark mix of storytelling, history and weirdness Dan Carlin connects the past and future in fascinating and colorful ways. At the same time the questions he asks us to consider involve the most important issue imaginable: human survival. From the collapse of the Bronze Age to the challenges of the nuclear era the issue has hung over humanity like a persistent Sword of Damocles. <p> Inspired by his podcast, The End is Always Near challenges the way we look at the past and ourselves. In this absorbing compendium, Carlin embarks on a whole new set of stories and major cliffhangers that will keep readers enthralled. Idiosyncratic and erudite, offbeat yet profound, The End is Always Near examines issues that are rarely presented, and makes the past immediately relevant to our very turbulent present.",
        pages: "288",
        author: "Dan Carlin",
        release_date: "October 29, 2019",
        wikipedia: "Dan_Carlin",
        poster: "img/the_end_is_always_near.jpg",
        genre: ["History", "Nonfiction", "Historical", "Politics", "War", "World History"]
    },
    {
        isbn: 9781587613371,
        title: "The Ethical Slut: A Practical Guide to Polyamory, Open Relationships & Other Adventures",
        overview: "If you've ever yearned for love, sex, and intimacy beyond the limits of conventional monogamy, The Ethical Slut will open you up to infinite possibilities. Relationship pioneers Dossie Easton and Janet W. Hardy dispel myths about sluthood and show you how to maintain a successful polyamorous lifestyle through open communication, emotional honesty, and safer-sex practices. This updated and expanded edition includes new strategies for single sluts, advice on how to open an existing relationship or marriage, and exercises to help you and your partners define relationships on your own terms. Whether you’re a card-carrying slut or just testing the waters, you’ll learn how to expand your circle of lovers and partners, balance your family and personal life, and discover romance and friendship beyond your dreams.",
        pages: "296",
        author: "Dossie Easton, Janet W. Hardy",
        release_date: "January 1, 1997",
        wikipedia: "The_Ethical_Slut",
        poster: "img/the_ethical_slut.jpg",
        genre: ["Nonfiction", "Sexuality", "Relationships", "Polyamory", "Self Help"]
    },
    {
        isbn: 9780451524935,
        title: "The Forty Rules of Love",
        overview: "Ella Rubenstein is forty years old and unhappily married when she takes a job as a reader for a literary agent. Her first assignment is to read and report on Sweet Blasphemy, a novel written by a man named Aziz Zahara. Ella is mesmerized by his tale of Shams's search for Rumi and the dervish's role in transforming the successful but unhappy cleric into a committed mystic, passionate poet, and advocate of love. She is also taken with Shams's lessons, or rules, that offer insight into an ancient philosophy based on the unity of all people and religions, and the presence of love in each and every one of us. As she reads on, she realizes that Rumi's story mir­rors her own and that Zahara—like Shams—has come to set her free. <p> In this lyrical, exuberant follow-up to her 2007 novel, The Bastard of Istanbul, acclaimed Turkish author Elif Shafak unfolds two tantalizing parallel narratives—one contemporary and the other set in the thirteenth century, when Rumi encountered his spiritual mentor, the whirling dervish known as Shams of Tabriz—that together incarnate the poet's timeless message of love.",
        pages: "354",
        author: "Elif Shafak",
        release_date: "January 1, 2009",
        wikipedia: "The_Forty_Rules_of_Love",
        poster: "img/the_forty_rules_of_love.jpg",
        genre: ["Fiction", "Historical Fiction", "Novels", "Romance", "Philosophy", "Spirituality", "Religion"]
    },
    {
        isbn: 9780452286757,
        title: "The Fountainhead",
        overview: "The revolutionary literary vision that sowed the seeds of Objectivism, Ayn Rand's groundbreaking philosophy, and brought her immediate worldwide acclaim. <p> This modern classic is the story of intransigent young architect Howard Roark, whose integrity was as unyielding as granite...of Dominique Francon, the exquisitely beautiful woman who loved Roark passionately, but married his worst enemy...and of the fanatic denunciation unleashed by an enraged society against a great creator. As fresh today as it was then, Rand’s provocative novel presents one of the most challenging ideas in all of fiction—that man’s ego is the fountainhead of human progress...",
        pages: "752",
        author: "Ayn Rand",
        release_date: "April 15, 1943",
        wikipedia: "The_Fountainhead",
        poster: "img/the_fountainhead.jpg",
        genre: ["Fiction", "Classics", "Philosophy", "Literature", "Novels", "Politics", "Architecture"]
    },
    {
        isbn: 9780679724537,
        title: "The Gnostic Gospels",
        overview: "The Gnostic Gospels is a landmark study of the long-buried roots of Christianity, a work of luminous scholarship and wide popular appeal. First published in 1979 to critical acclaim, winning the National Book Award and the National Book Critics Circle Award, The Gnostic Gospels has continued to grow in reputation and influence over the past two decades. It is now widely recognized as one of the most brilliant and accessible histories of early Christian spirituality published in our time. <p> In 1945 an Egyptian peasant unearthed what proved to be the Gnostic Gospels, thirteen papyrus volumes that expounded a radically different view of the life and teachings of Jesus Christ from that of the New Testament. In this spellbinding book, renowned religious scholar Elaine Pagels elucidates the mysteries and meanings of these sacred texts both in the world of the first Christians and in the context of Christianity today. <p> With insight and passion, Pagels explores a remarkable range of recently discovered gospels, including the Gospel of Thomas and the Gospel of Mary Magdalene, to show how a variety of “Christianities” emerged at a time of extraordinary spiritual upheaval. Some Christians questioned the need for clergy and church doctrine, and taught that the divine could be discovered through spiritual search. Many others, like Buddhists and Hindus, sought enlightenment — and access to God — within. Such explorations raised questions: Was the resurrection to be understood symbolically and not literally? Was God to be envisioned only in masculine form, or feminine as well? Was martyrdom a necessary — or worthy — expression of faith? These early Christians dared to ask questions that orthodox Christians later suppressed — and their explorations led to profoundly different visions of Jesus and his message. <p> Brilliant, provocative, and stunning in its implications, The Gnostic Gospels is a radical, eloquent reconsideration of the origins of the Christian faith.",
        pages: "218",
        author: "Elaine Pagels",
        release_date: "November 12, 1979",
        wikipedia: "Elaine_Pagels",
        poster: "img/the_gnostic_gospels.jpg",
        genre: ["Religion", "Nonfiction", "History", "Spirituality", "Christianity", "Philosophy", "Theology"]
    },
    {
        isbn: 9781594205453,
        title: "The Great Degeneration",
        overview: "From renowned historian Niall Ferguson, a searching and provocative examination of the widespread institutional rot that threatens our collective future. <p> What causes rich countries to lose their way? Symptoms of decline are all around us slowing growth, crushing debts, increasing inequality, aging populations, antisocial behavior. But what exactly has gone wrong? The answer, Niall Ferguson argues in The Great Degeneration , is that our institutions—the intricate frameworks within which a society can flourish or fail—are degenerating. <p> Representative government, the free market, the rule of law, and civil society—these are the four pillars of West European and North American societies. It was these institutions, rather than any geographical or climatic advantages, that set the West on the path to global dominance beginning around 1500. In our time, however, these institutions have deteriorated in disturbing ways. Our democracies have broken the contract between the generations by heaping IOUs on our children and grandchildren. Our markets are hindered by overcomplex regulations that debilitate the political and economic processes they were created to support; the rule of law has become the rule of lawyers. And civil society has degenerated into uncivil society, where we lazily expect all of our problems to be solved by the state. <p> It is institutional degeneration, in other words, that lies behind economic stagnation and the geopolitical decline that comes with it. With characteristic verve and historical insight, Ferguson analyzes not only the causes of this stagnation but also its profound consequences. <p> The Great Degeneration is an incisive indictment of an era of negligence and complacency. While the Arab world struggles to adopt democracy and China struggles to move from economic liberalization to the rule of law, our society is squandering the institutional inheritance of centuries. To arrest the breakdown of our civilization, Ferguson warns, will take heroic leadership and radical reform.",
        pages: "192",
        author: "Niall Ferguson",
        release_date: "October 17, 2012",
        wikipedia: "The_Great_Degeneration",
        poster: "img/the_great_degeneration.jpg",
        genre: ["History", "Economics", "Nonfiction", "Politics", "Sociology", "Political Science", "Business"]
    },
    {
        isbn: 9780451524935,
        title: "The Great Gatsby",
        overview: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. <p> The Great Gatsby is one of the great classics of twentieth-century literature.",
        pages: "180",
        author: "F. Scott Fitzgerald",
        release_date: "April 10, 1925",
        wikipedia: "The_Great_Gatsby",
        poster: "img/the_great_gatsby.jpg",
        genre: ["Classics", "Fiction", "Historical Fiction", "Romance", "Literature", "Novels"]
    },
    {
        isbn: 9780060139148,
        title: "The Gulag Archipelago, 1918-1956: An Experiment in Literary Investigation I-II",
        overview: "It is a question if any work of literature in our era other than The Divine Comedy is commensurate with The Gulag Archipelago in structure, scale, multiplicity of incident and characters, emotional range, variety of inflection and, above all, in the staggering magnitude of its underlying concept. <p> In this masterpiece, the author of One Day in the Life of Ivan Denisovich and The First Circle has orchestrated thousands of incidents and individual histories into one narrative of unflagging power and momentum. Written in a tone that encompasses Olympian wrath, bitter calm, savage irony and sheer comedy, it combines history, autobiography, documentary and political analysis as it examines in its totality the Soviet apparatus of repression from its inception following the October revolution of 1917. <p> The \"Archipelago\" of Mr. Solzhenitsyn's work is the network of secret police installations, camps, prisons, transit centers, communications facilities, transportation systems and espionage organizations which, in his view, honeycombs the length and breadth of the Soviet Union. <p> Drawing on his own experience, material from Soviet archives, cases collected during his eleven years of labor camps and exile, and the evidence of more that 200 fellow prisoners, Mr. Solzhenitsyn concludes that the secret police are the vital element of the Soviet regime, and have been ever since its founding by Lenin. <p> Numerous studies of the Soviet system of control have been published in the West but until now nothing so complete, so carefully documented and assembled, and never before has a literary giant devoted his gifts of narrative and characterization to the enterprise. Solzhenitsyn has here created and peopled with brilliantly portrayed human beings a vast, overarching fresco of that state within a state which is the Gulag Archipelago. <p> (Taken from the inside jacket material of the Harper & Row First Edition of 1973)",
        pages: "660",
        author: "Aleksandr Solzhenitsyn",
        release_date: "January 1, 1973",
        wikipedia: "The_Gulag_Archipelago",
        poster: "img/the_gulag_archipelago_vol_1.jpg",
        genre: ["History", "Nonfiction", "Russia", "Politics", "Classics", "Biography", "Russian Literature"]
    },
    {
        isbn: 9781400052929,
        title: "The Hitchhiker's Guide to the Galaxy",
        overview: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. <p> Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox--the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years. <p> Where are these pens? Why are we born? Why do we die? Why do we spend so much time between wearing digital watches? For all the answers stick your thumb to the stars. And don't forget to bring a towel!",
        pages: "215",
        author: "Douglas Adams",
        release_date: "October 12, 1979",
        wikipedia: "The_Hitchhiker%27s_Guide_to_the_Galaxy_(novel)",
        poster: "img/the_hitchhikers_guide_to_the_galaxy.jpg",
        genre: ["Science Fiction", "Fiction", "Humor", "Classics", "Fantasy", "Comedy"]
    },
    {
        isbn: 9780671710316,
        title: "The House of Morgan: An American Banking Dynasty and the Rise of Modern Finance",
        overview: "The winner of the National Book Award and now considered a classic, The House of Morgan is the most ambitious history ever written about an American banking dynasty. Acclaimed by The Wall Street Journal as \"brilliantly researched and written,\" the book tells the rich, panoramic story of four generations of Morgans and the powerful, secretive firms they spawned. It is the definitive account of the rise of the modern financial world. A gripping history of banking and the booms and busts that shaped the world on both sides of the Atlantic, The House of Morgan traces the trajectory of the J. P. Morgan empire from its obscure beginnings in Victorian London to the crash of 1987. Ron Chernow paints a fascinating portrait of the private saga of the Morgans and the rarefied world of the American and British elite in which they moved. Based on extensive interviews and access to the family and business archives, The House of Morgan is an investigative masterpiece, a compelling account of a remarkable institution and the men who ran it, and an essential book for understanding the money and power behind the major historical events of the last 150 years.",
        pages: "850",
        author: "Ron Chernow",
        release_date: "January 1, 1990",
        wikipedia: "The_House_of_Morgan",
        poster: "img/the_house_of_morgan.jpg",
        genre: ["History", "Biography", "Nonfiction", "Business", "Finance", "Economics", "American History"]
    },
    {
        isbn: 9781627790109,
        title: "The Hundred-Year Marathon: China's Secret Strategy to Replace America as the Global Superpower",
        overview: "One of the U.S. government's leading China experts reveals the hidden strategy fueling that country's rise – and how Americans have been seduced into helping China overtake us as the world's leading superpower. <p> For more than forty years, the United States has played an indispensable role helping the Chinese government build a booming economy, develop its scientific and military capabilities, and take its place on the world stage, in the belief that China's rise will bring us cooperation, diplomacy, and free trade. But what if the \"China Dream\" is to replace us, just as America replaced the British Empire, without firing a shot? <p> Based on interviews with Chinese defectors and newly declassified, previously undisclosed national security documents, The Hundred-Year Marathon reveals China's secret strategy to supplant the United States as the world's dominant power, and to do so by 2049, the one-hundredth anniversary of the founding of the People's Republic. Michael Pillsbury, a fluent Mandarin speaker who has served in senior national security positions in the U.S. government since the days of Richard Nixon and Henry Kissinger, draws on his decades of contact with the \"hawks\" in China's military and intelligence agencies and translates their documents, speeches, and books to show how the teachings of traditional Chinese statecraft underpin their actions. He offers an inside look at how the Chinese really view America and its leaders – as barbarians who will be the architects of their own demise. <p> Pillsbury also explains how the U.S. government has helped – sometimes unwittingly and sometimes deliberately – to make this \"China Dream\" come true, and he calls for the United States to implement a new, more competitive strategy toward China as it really is, and not as we might wish it to be. The Hundred-Year Marathon is a wake-up call as we face the greatest national security challenge of the twenty-first century.",
        pages: "336",
        author: "Michael Pillsbury",
        release_date: "November 11, 2014",
        wikipedia: "Michael_Pillsbury",
        poster: "img/the_hundred-year_marathon.jpg",
        genre: ["China", "Politics", "History", "Nonfiction", "Asia", "Economics", "Business"]
    },
    {
        isbn: 9780859652735,
        title: "The Killing of Tupac Shakur",
        overview: "Poet, movie star, revolutionary -- Tupac Amaru Shakur was the most popular rapper in the world.No one symbolized the violence at the heart of gangsta rap more than Tupac, and he ultimately fell victim to that violence, gunned down in a drive-by shooting in Las Vegas at age 25. <p> Who did it and why? This raw no-holds-barred account discloses new information, including exclusive photo evidence, about the unsolved murder of Tupac: the failed investigation, the rap wars, the killing of Biggie Smalls, the Bloods-Crips connection, and the many possible motives leading to the murder that rocked the music world.",
        pages: "235",
        author: "Cathy Scott",
        release_date: "January 1, 1997",
        wikipedia: "The_Killing_of_Tupac_Shakur",
        poster: "img/the_killing_of_tupac_shakur.jpg",
        genre: ["True Crime", "Music", "Nonfiction"]
    },
    {
        isbn: 9780816038572,
        title: "The Mafia Encyclopedia",
        overview: "They're all there, starting with Anthony Joseph Accardo (1906-1992), the Chicago mob leader known as Tony to crime pals, Mr. Accardo to underlings, Joe Batters to his subordinates, and as \"having more brains before breakfast than Al Capone had all day\" to syndicate supporters, and working through the alphabet to Abner \"Longy\" Zwillman (1899-1959), a crime-syndicate founder and New Jersey boss, one of the most feared of the Jewish Mafia, known as the \"Al Capone of new Jersey,\" and much revered for his love affair with Jean Harlow. <p> Between Accardo and Zwillman, Carl Sifakis explores the lives, reputations, exploits, and subcultures of more than 450 Mafia perpetrators and personalities. Sifakis describes the individuals, codes of behavior, misdeeds, legal scrapes, rivalries, and flamboyant lifestyles associated with the world of organized crime--an entity whose existence J. Edgar Hoover denied for 30 years. Sifakis's research is thorough, and his subjects are nefarious and riveting. It's his feel for storytelling, however, that makes his encyclopedia so enjoyable. He writes about infamous characters such as Al Capone (who felt his bootlegging was merely a public service) and John Gotti (a.k.a. the Teflon Don, who's now serving a life sentence) as well as the Mafia Social Clubs, Donnie Brasco (the FBI agent who infiltrated the mob and sent more than 100 mobsters to prison), and the importance of slot machines to the post-Prohibition welfare of organized crime. <p> With nearly 100 pictures and illustrations, Sifakis's mob opus is required reading for Mafia buffs, and a remarkably engaging guide for anyone interested in a factual report on organized crime.",
        pages: "414",
        author: "Carl Sifakis",
        release_date: "January 1, 1999",
        wikipedia: "American_Mafia",
        poster: "img/the_mafia_encyclopedia.jpg",
        genre: ["True Crime", "History", "Nonfiction", "Reference", "Crime"]
    },
    {
        isbn: 9780307269935,
        title: "The Master Switch: The Rise and Fall of Information Empires",
        overview: "In this age of an open Internet, it is easy to forget that every American information industry, beginning with the telephone, has eventually been taken captive by some ruthless monopoly or cartel. With all our media now traveling a single network, an unprecedented potential is building for centralized control over what Americans see and hear. Could history repeat itself with the next industrial consolidation? Could the Internet—the entire flow of American information—come to be ruled by one corporate leviathan in possession of “the master switch”? That is the big question of Tim Wu’s pathbreaking book. <p> As Wu’s sweeping history shows, each of the new media of the twentieth century—radio, telephone, television, and film—was born free and open. Each invited unrestricted use and enterprising experiment until some would-be mogul battled his way to total domination. Here are stories of an uncommon will to power, the power over information: Adolph Zukor, who took a technology once used as commonly as YouTube is today and made it the exclusive prerogative of a kingdom called Hollywood . . . NBC’s founder, David Sarnoff, who, to save his broadcast empire from disruptive visionaries, bullied one inventor (of electronic television) into alcoholic despair and another (this one of FM radio, and his boyhood friend) into suicide . . . And foremost, Theodore Vail, founder of the Bell System, the greatest information empire of all time, and a capitalist whose faith in Soviet-style central planning set the course of every information industry thereafter. <p> Explaining how invention begets industry and industry begets empire—a progress often blessed by government, typically with stifling consequences for free expression and technical innovation alike—Wu identifies a time-honored pattern in the maneuvers of today’s great information powers: Apple, Google, and an eerily resurgent AT&T. A battle royal looms for the Internet’s future, and with almost every aspect of our lives now dependent on that network, this is one war we dare not tune out. <p> Part industrial exposé, part meditation on what freedom requires in the information age, The Master Switch is a stirring illumination of a drama that has played out over decades in the shadows of our national life and now culminates with terrifying implications for our future.",
        pages: "384",
        author: "Tim Wu",
        release_date: "January 1, 2010",
        wikipedia: "Tim_Wu",
        poster: "img/the_master_switch.jpg",
        genre: ["Nonfiction", "Technology", "History", "Business", "Science", "Economics", "Politics"]
    },
    {
        isbn: 9780312863555,
        title: "The Moon is a Harsh Mistress",
        overview: "Robert A. Heinlein was the most influential science fiction writer of his era, an influence so large that, as Samuel R. Delany notes, \"modern critics attempting to wrestle with that influence find themselves dealing with an object rather like the sky or an ocean.\" He won the Hugo Award for best novel four times, a record that still stands. The Moon is a Harsh Mistress was the last of these Hugo-winning novels, and it is widely considered his finest work. <p> It is a tale of revolution, of the rebellion of the former Lunar penal colony against the Lunar Authority that controls it from Earth. It is the tale of the disparate people - a computer technician, a vigorous young female agitator, and an elderly academic - who become the rebel movement's leaders. And it is the story of Mike, the supercomputer whose sentience is known only to this inner circle, and who for reasons of his own is committed to the revolution's ultimate success. <p> The Moon is a Harsh Mistress is one of the high points of modern science fiction, a novel bursting with politics, humanity, passion, innovative technical speculation, and a firm belief in the pursuit of human freedom.",
        pages: "382",
        author: "Robert A. Heinlein",
        release_date: "June 2, 1966",
        wikipedia: "The_Moon_Is_a_Harsh_Mistress",
        poster: "img/the_moon_is_a_harsh_mistress.jpg",
        genre: ["Science Fiction", "Fiction", "Classics", "Fantasy", "Politics"]
    },
    {
        isbn: 9780679763994,
        title: "The Moral Animal: Why We Are the Way We Are - The New Science of Evolutionary Psychology",
        overview: "Are men literally born to cheat? Does monogamy actually serve women's interests? These are among the questions that have made The Moral Animal one of the most provocative science books in recent years. Wright unveils the genetic strategies behind everything from our sexual preferences to our office politics--as well as their implications for our moral codes and public policies.",
        pages: "496",
        author: "Robert Wright",
        release_date: "January 1, 1994",
        wikipedia: "The_Moral_Animal",
        poster: "img/the_moral_animal.jpg",
        genre: ["Psychology", "Science", "Nonfiction", "Philosophy", "Evolution", "Biology", "Anthropology"]
    },
    {
        isbn: 9781668034606,
        title: "The Mysterious Case of Rudolf Diesel: Genius, Power, and Deception on the Eve of World War I",
        overview: "The hidden history of one of the world’s greatest inventors, a man who disrupted the status quo and then disappeared into thin air on the eve of World War I—this book answers the hundred-year-old mystery of what really became of Rudolf Diesel. <p> September 29, 1913: the steamship Dresden is halfway between Belgium and England. On board is one of the most famous men in the world, Rudolf Diesel, whose new internal combustion engine is on the verge of revolutionizing global industry forever. But Diesel never arrives at his destination. He vanishes during the night and headlines around the world wonder if it was an accident, suicide, or murder. <p> After rising from an impoverished European childhood, Diesel had become a multi-millionaire with his powerful engine that does not require expensive petroleum-based fuel. In doing so, he became not only an international celebrity but also the enemy of two extremely powerful men: Kaiser Wilhelm II of Germany and John D. Rockefeller, the founder of Standard Oil and the richest man in the world. <p> The Kaiser wanted the engine to power a fleet of submarines that would finally allow him to challenge Great Britain’s Royal Navy. But Diesel had intended for his engine to be used for the betterment of mankind and refused to keep the technology out of the hands of the British or any other nation. For John D. Rockefeller, the engine was nothing less than an existential threat to his vast and lucrative oil empire. As electric lighting began to replace kerosene lamps, Rockefeller’s bottom line depended on the world’s growing thirst for gasoline to power its automobiles and industries. <p> At the outset of this new age of electricity and oil, Europe stood on the precipice of war. Rudolf Diesel grew increasingly concerned about Germany’s rising nationalism and military spending. The inventor was on his way to London to establish a new company that would help Britain improve its failing submarine program when he disappeared. <p> Now, New York Times bestselling author Douglas Brunt reopens the case and provides an astonishing new conclusion about Diesel’s fate. “Equal parts Walter Isaacson and Sherlock Holmes, The Mysterious Case of Rudolf Diesel yanks back the curtain on the greatest caper of the 20th century in this riveting history” (Jay Winik, New York Times bestselling author).",
        pages: "384",
        author: "Douglas Brunt",
        release_date: "September 19, 2023",
        wikipedia: "Douglas_Brunt",
        poster: "img/the_mysterious_case_of_rudolf_diesel.jpg",
        genre: ["History", "Nonfiction", "Biography", "Mystery", "True Crime", "Historical"]
    },
    {
        isbn: 9780312360115,
        title: "The Mystery Method: How to Get Beautiful Women Into Bed",
        overview: "For every man who always wondered why some guys have all the luck, Mystery, considered by many to be the world's greatest pickup artist, finally reveals his secrets for finding and forming relationships with some of the world's most beautiful women. Mystery gained mainstream attention for his role in Neil Strauss's New York Times bestselling exposé, The Game. Now he has written the definitive handbook on the art of the pickup. <p> He developed his unique method over years of observing social dynamics and interacting with women in clubs to learn how to overcome the guard shield that many women use to deflect come-ons from \"average frustrated chumps.\"",
        pages: "240",
        author: "Mystery",
        release_date: "July 9, 2007",
        wikipedia: "Erik_von_Markovik",
        poster: "img/the_mystery_method.jpg",
        genre: ["Psychology", "Relationships", "Self Help", "Nonfiction", "Personal Development", "Mystery"]
    },
    {
        isbn: 9780684857213,
        title: "The New Encyclopedia of Modern Bodybuilding: The Bible of Bodybuilding, Fully Updated and Revised",
        overview: "From elite bodybuilding competitors to gymnasts, from golfers to fitness gurus, anyone who works out with weights must own this book—a book that only Arnold Schwarzenegger could write, a book that has earned its reputation as “the bible of bodybuilding.” <p> Inside, Arnold covers the very latest advances in both weight training and bodybuilding competition, with new sections on diet and nutrition, sports psychology, the treatment and prevention of injuries, and methods of training, each illustrated with detailed photos of some of bodybuilding's newest stars. <p> Plus, all the features that have made this book a classic are here: <p> -Arnold's tried-and-true tips for sculpting, strengthening, and defining each and every muscle to create the ultimate buff physique <p> -The most effective methods of strength training to stilt your needs, whether you're an amateur athlete or a pro bodybuilder preparing for a competition <p> -Comprehensive information on health, nutrition, and dietary supplements to help you build muscle, lose fat, and maintain optimum energy <p> -Expert advice on the prevention and treatment of sports-related injuries <p> -Strategies and tactics for competitive bodybuilders from selecting poses to handling publicity <p> -The fascinating history and growth of bodybuilding as a sport, with a photographic “Bodybuilding Hall of Fame” <p> -And, of course, Arnold's individual brand of inspiration and motivation throughout <p> Covering every level of expertise and experience, The New Encyclopedia of Modern Bodybuilding will help you achieve your personal best. With his unique perspective as a seven-time winner of the Mr. Olympia title and all international film star, Arnold shares his secrets to dedication, training, and commitment, and shows you how to take control of your body and realize your own potential for greatness.",
        pages: "832",
        author: "Arnold Schwarzenegger",
        release_date: "July 1, 1985",
        wikipedia: "Arnold_Schwarzenegger",
        poster: "img/the_new_encyclopedia_of_modern_bodybuilding.jpg",
        genre: ["Fitness", "Health", "Nonfiction", "Reference", "Sports", "Self Help", "Science"]
    },
    {
        isbn: 9780140268867,
        title: "The Odyssey",
        overview: "Sing to me of the man, Muse, the man of twists and turns <p> driven time and again off course, once he had plundered <p> the hallowed heights of Troy. <p> If the Iliad is the world's greatest war epic, then the Odyssey is literature's grandest evocation of everyman's journey though life. Odysseus' reliance on his wit and wiliness for survival in his encounters with divine and natural forces, during his ten-year voyage home to Ithaca after the Trojan War, is at once a timeless human story and an individual test of moral endurance. <p> In the myths and legends that are retold here, Fagles has captured the energy and poetry of Homer's original in a bold, contemporary idiom, and given us an Odyssey to read aloud, to savor, and to treasure for its sheer lyrical mastery. <p> Renowned classicist Bernard Knox's superb Introduction and textual commentary provide new insights and background information for the general reader and scholar alike, intensifying the strength of Fagles' translation. <p> This is an Odyssey to delight both the classicist and the public at large, and to captivate a new generation of Homer's students. <p> Robert Fagles, winner of the PEN/Ralph Manheim Medal for Translation and a 1996 Academy Award in Literature from the American Academy of Arts and Letters, presents us with Homer's best-loved and most accessible poem in a stunning new modern-verse translation.",
        pages: "560",
        author: "Homer, Robert Fagles",
        release_date: "January 1, 701",
        wikipedia: "Odyssey",
        poster: "img/the_odyssey.jpg",
        genre: ["Classics", "Fiction", "Poetry", "Mythology", "Fantasy", "Literature"]
    },
    {
        isbn: 9780684830490,
        title: "The Old Man and the Sea",
        overview: "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses—specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.",
        pages: "96",
        author: "Ernest Hemingway",
        release_date: "January 1, 1952",
        wikipedia: "The_Old_Man_and_the_Sea",
        poster: "img/the_old_man_and_the_sea.jpg",
        genre: ["Classics", "Fiction", "Literature", "Novels", "American", "Adventure"]
    },
    {
        isbn: 9780316371766,
        title: "The Pentagon's Brain: An Uncensored History of DARPA, America's Top-Secret Military Research Agency",
        overview: "The definitive history of DARPA, the Defense Advanced Research Project Agency, from the author of the New York Times bestseller Area 51 <p> No one has ever written the history of the Defense Department's most secret, most powerful, and most controversial military science R&D agency. In the first-ever history about the organization, New York Times bestselling author Annie Jacobsen draws on inside sources, exclusive interviews, private documents, and declassified memos to paint a picture of DARPA, or \"the Pentagon's brain,\" from its Cold War inception in 1958 to the present. <p> This is the book on DARPA--a compelling narrative about this clandestine intersection of science and the American military and the often frightening results.",
        pages: "560",
        author: "Annie Jacobsen",
        release_date: "September 1, 2015",
        wikipedia: "Annie_Jacobsen",
        poster: "img/the_pentagons_brain.jpg",
        genre: ["History", "Nonfiction", "Science", "Military Fiction", "Politics", "War", "Technology"]
    },
    {
        isbn: 9780451524935,
        title: "The Pilgrim's Progress",
        overview: "This famous story of man's progress through life in search of salvation remains one of the most entertaining allegories of faith ever written. Set against realistic backdrops of town and country, the powerful drama of the pilgrim's trials and temptations follows him in his harrowing journey to the Celestial City. <p> Along a road filled with monsters and spiritual terrors, Christian confronts such emblematic characters as Worldly Wiseman, Giant Despair, Talkative, Ignorance, and the demons of the Valley of the Shadow of Death. But he is also joined by Hopeful and Faithful. <p> An enormously influential 17th-century classic, universally known for its simplicity, vigor, and beauty of language, The Pilgrim's Progress remains one of the most widely read books in the English language.",
        pages: "324",
        author: "John Bunyan",
        release_date: "February 18, 1678",
        wikipedia: "The_Pilgrim%27s_Progress",
        poster: "img/the_pilgrims_progress.jpg",
        genre: ["Classics", "Fiction", "Religion", "Christianity", "Theology"]
    },
    {
        isbn: 9780451524935,
        title: "The Play Zone : Unlock Your Creative Genius and Connect with Consumers",
        overview: "Lewis Pinault experienced an interesting phenomenon after the publication of Consulting Demons – instead of shunning him, consultants of every stripe were eager to echo his experiences, and wanted him to test and assess consulting techniques being developed in light of the new economic regime. In this environment, Pinault discovered how consultants were changing to keep up with the leaner economy, and his role as a consultant to consultants led to an invitation to join EDS as its VP of Consumer Industries and Retail. Against this background, Pinault again draws back the curtain on the professional services industry, this time revealing the latest cutting–edge findings set to revolutionize the consumer the amazing relationship between innocent play and complex technologies, and how the growing importance of our creative power as consumers is redefining the multi–trillion dollar consumer industry. By integrating the latest findings from the fields of complexity science, and customer service and management, and rendering them simply and logically, Pinault has created a system of 6 principles that can be successfully applied to any organization to unleash the power of play in all aspects of the consumer experience. Filled with entertaining stories, larger–than–life characters and eye–opening revelations, The Play Zone will guide readers through a boisterous crowd of important new ideas so that they can connect with consumers like never before.",
        pages: "256",
        author: "Lewis Pinault",
        release_date: "January 1, 2004",
        wikipedia: "",
        poster: "img/the_play_zone.jpg",
        genre: ["Business"]
    },
    {
        isbn: 9781592575701,
        title: "The Pocket Idiot's Guide to Breaking Up",
        overview: "A wise guide to handling the end of a relationship. <p> A breakup doesn’t mean everything has to fall apart. Laurie Helgoe uses her years of experience as a clinical psychologist to show those who are coping with a breakup to pick up the pieces and move on with their lives. This guide provides sage advice on how to handle every aspect of separating from a partner, from knowing when to stop communicating, dealing with the blues, and when to start dating again. <p> • Edgy and humorous, yet full of practical advice <p> • The first book to deal with being the dumper, as well as the dumpee <p> • Tips that will get readers through lonely nights and days of “retail therapy”—without insulting their intelligence or getting involved in 12-step therapy speak",
        pages: "192",
        author: "Laurie A. Helgoe",
        release_date: "January 1, 2006",
        wikipedia: "Laurie_Helgoe",
        poster: "img/the_pocket_idiots_guide_to_breaking_up.jpg",
        genre: ["Psychology", "Relationships"]
    },
    {
        isbn: 9780394480763,
        title: "The Power Broker: Robert Moses and the Fall of New York",
        overview: "PULITZER PRIZE WINNER • A modern American classic, this huge and galvanizing biography of Robert Moses reveals not only the saga of one man’s incredible accumulation of power but the story of his shaping (and mis-shaping) of twentieth-century New York. <p> One of the Modern Library’s hundred greatest books of the twentieth century, Robert Caro's monumental book makes public what few outsiders that Robert Moses was the single most powerful man of his time in the City and in the State of New York. And in telling the Moses story, Caro both opens up to an unprecedented degree the way in which politics really happens—the way things really get done in America's City Halls and Statehouses—and brings to light a bonanza of vital information about such national figures as Alfred E. Smith and Franklin D. Roosevelt (and the genesis of their blood feud), about Fiorello La Guardia, John V. Lindsay and Nelson Rockefeller. <p> But The Power Broker is first and foremost a brilliant multidimensional portrait of a man—an extraordinary man who, denied power within the normal framework of the democratic process, stepped outside that framework to grasp power sufficient to shape a great city and to hold sway over the very texture of millions of lives. We see how Moses the handsome, intellectual young heir to the world of Our Crowd, an idealist. How, rebuffed by the entrenched political establishment, he fought for the power to accomplish his ideals. How he first created a miraculous flowering of parks and parkways, playlands and beaches—and then ultimately brought down on the city the smog-choked aridity of our urban landscape, the endless miles of (never sufficient) highway, the hopeless sprawl of Long Island, the massive failures of public housing, and countless other barriers to humane living. How, inevitably, the accumulation of power became an end in itself. <p> Moses built an empire and lived like an emperor. He was held in fear—his dossiers could disgorge the dark secret of anyone who opposed him. He was, he claimed, above politics, above deals; and through decade after decade, the newspapers and the public believed. Meanwhile, he was developing his public authorities into a fourth branch of government known as \"Triborough\"—a government whose records were closed to the public, whose policies and plans were decided not by voters or elected officials but solely by Moses—an immense economic force directing pressure on labor unions, on banks, on all the city's political and economic institutions, and on the press, and on the Church. He doled out millions of dollars' worth of legal fees, insurance commissions, lucrative contracts on the basis of who could best pay him back in the only coin he power. He dominated the politics and politicians of his time—without ever having been elected to any office. He was, in essence, above our democratic system. <p> Robert Moses held power in the state for 44 years, through the governorships of Smith, Roosevelt, Lehman, Dewey, Harriman and Rockefeller, and in the city for 34 years, through the mayoralties of La Guardia, O'Dwyer, Impellitteri, Wagner and Lindsay, He personally conceived and carried through public works costing 27 billion dollars—he was undoubtedly America's greatest builder. <p> This is how he built and dominated New York—before, finally, he was stripped of his reputation (by the press) and his power (by Nelson Rockefeller). But his work, and his will, had been done.",
        pages: "1,296",
        author: "Robert A. Caro",
        release_date: "September 16, 1974",
        wikipedia: "The_Power_Broker",
        poster: "img/the_power_broker.jpg",
        genre: ["History", "Biography", "Nonfiction", "Politics", "Business", "American History"]
    },
    {
        isbn: 9780451524935,
        title: "The Prince",
        overview: "As a young Florentine envoy to the courts of France and the Italian principalities, Niccolò Machiavelli (1469–1527) was able to observe firsthand the lives of people strongly united under one powerful ruler. His fascination with that political rarity and his intense desire to see the Medici family assume a similar role in Italy provided the foundation for his \"primer for princes.\" In this classic guide to acquiring and maintaining political power, Machiavelli used a rational approach to advise prospective rulers, developing logical arguments and alternatives for a number of potential problems, among them governing hereditary monarchies, dealing with colonies and the treatment of conquered peoples. <p> Refreshing in its directness, yet often disturbing in its cold practicality, The Prince sets down a frighteningly pragmatic formula for political fortune. Starkly relevant to the political upheavals of the 20th century, this calculating prescription for power remains today, nearly 500 years after it was written, a timely and startling lesson in the practice of autocratic rule that continues to be much read and studied by students, scholars and general readers as well.",
        pages: "80",
        author: "Niccolò Machiavelli",
        release_date: "January 1, 1513",
        wikipedia: "The_Prince",
        poster: "img/the_prince.jpg",
        genre: ["Classics", "Philosophy", "Nonfiction", "Politics", "History", "Literature", "Political Science"]
    },
    {
        isbn: 9780394404288,
        title: "The Prophet",
        overview: "Kahlil Gibran’s masterpiece, The Prophet, is one of the most beloved classics of our time. Published in 1923, it has been translated into more than twenty languages, and the American editions alone have sold more than nine million copies. <p> The Prophet is a collection of poetic essays that are philosophical, spiritual, and, above all, inspirational. Gibran’s musings are divided into twenty-eight chapters covering such sprawling topics as love, marriage, children, giving, eating and drinking, work, joy and sorrow, housing, clothes, buying and selling, crime and punishment, laws, freedom, reason and passion, pain, self-knowledge, teaching, friendship, talking, time, good and evil, prayer, pleasure, beauty, religion, and death. <p> Each essay reveals deep insights into the impulses of the human heart and mind. The Chicago Post said of The Prophet: “Cadenced and vibrant with feeling, the words of Kahlil Gibran bring to one’s ears the majestic rhythm of Ecclesiastes . . . If there is a man or woman who can read this book without a quiet acceptance of a great man’s philosophy and a singing in the heart as of music born within, that man or woman is indeed dead to life and truth.” <p> With twelve full-page drawings by Gibran, this beautiful work makes an incredible gift for anyone seeking enlightenment and inspiration.",
        pages: "96",
        author: "Kahlil Gibran",
        release_date: "January 1, 1923",
        wikipedia: "The_Prophet_(book)",
        poster: "img/the_prophet.jpg",
        genre: ["Poetry", "Classics", "Philosophy", "Fiction", "Spirituality", "Religion", "Literature"]
    },
    {
        isbn: 9780857197689,
        title: "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
        overview: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. Money--investing, personal finance, and business decisions--is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world people don't make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics.",
        pages: "256",
        author: "Morgan Housel",
        release_date: "January 1, 2020",
        wikipedia: "",
        poster: "img/the_psychology_of_money.jpg",
        genre: ["Finance", "Nonfiction", "Psychology", "Business", "Self Help", "Money", "Personal Finance"]
    },
    {
        isbn: 9781510766808,
        title: "The Real Anthony Fauci: Bill Gates, Big Pharma, and the Global War on Democracy and Public Health",
        overview: "As director of the National Institute of Allergy and Infectious Diseases (NIAID), Dr. Anthony Fauci dispenses $6.1 billion in annual taxpayer-provided funding for rigged scientific research, allowing him to dictate the subject, content, and outcome of scientific health research across the globe—truly a dark agenda. Fauci uses the financial clout at his disposal in a back handed manner to wield extraordinary influence over hospitals, universities, journals, and thousands of influential doctors and scientists—whose careers and institutions he has the power to ruin, advance, or reward in an authoritarian manner. <p> During more than a year of painstaking and meticulous research on his laptop and through interviews, Robert F. Kennedy Jr. unearthed a shocking story that obliterates media spin on Dr. Fauci . . . and that will alarm every American—Democrat or Republican—who cares about democracy, our Constitution, and the future of our children’s health. <p> The Real Anthony Fauci reveals how “America’s Doctor” launched his career during the early AIDS crisis by partnering with pharmaceutical companies to sabotage safe and effective off-patent therapeutic treatments for AIDS. Fauci orchestrated fraudulent do-nothing studies, and then pressured US Food and Drug Administration (FDA) regulators into approving a deadly chemotherapy treatment he had good reason to know was worthless against AIDS. Fauci did the unthinkable and repeatedly violated federal laws to allow his Pharma partners to use impoverished and dark-skinned children as lab rats in beyond order, deadly experiments with toxic AIDS and cancer chemotherapies. <p> In early 2000, Fauci shook hands with Bill Gates in the library of Gates’ $147 million Seattle mansion, cementing a partnership that would aim to control an increasingly profitable $60 billion global vaccine enterprise with unlimited growth potential. Through funding leverage and carefully cultivated personal relationships with heads of state and leading media and social media institutions, the Pharma-Fauci-Gates alliance exercises dominion over global health policy and our beautiful country. <p> This is not just another political book. The Real Anthony Fauci details how Fauci, Gates, and their cohorts use their control of media outlets—both conservative and liberal leaning, scientific journals, key government and quasi-governmental agencies, global intelligence agencies, and influential scientists and physicians to flood the public with fearful propaganda about COVID-19 virulence and pathogenesis, and to muzzle debate and ruthlessly censor dissent.",
        pages: "492",
        author: "Robert F. Kennedy Jr.",
        release_date: "November 16, 2021",
        wikipedia: "The_Real_Anthony_Fauci",
        poster: "img/the_real_anthony_fauci.jpg",
        genre: ["Nonfiction", "Politics", "Health", "Science", "History", "Biography", "Medicine"]
    },
    {
        isbn: 9780060556570,
        title: "The Red Queen: Sex and the Evolution of Human Nature",
        overview: "“A terrific book, witty and lucid, and brimming with provocative conjectures.” ( Wall Street Journal ) from the author of the acclaimed New York Times bestseller Genome Brilliantly written, The Red Queen compels us to rethink everything from the persistence of sexism to the endurance of romantic love. Referring to Lewis Carroll's Red Queen from Through the Looking-Glass , a character who has to keep running to stay in the same place, Matt Ridley demonstrates why sex is humanity's best strategy for outwitting its constantly mutating internal predators. The Red Queen answers dozens of other riddles of human nature and culture—including why men propose marriage, the method behind our maddening notions of beauty, and the disquieting fact that a woman is more likely to conceive a child by an adulterous lover than by her husband. The Red Queen offers an extraordinary new way of interpreting the human condition and how it has evolved.",
        pages: "405",
        author: "Matt Ridley",
        release_date: "October 1, 1993",
        wikipedia: "The_Red_Queen:_Sex_and_the_Evolution_of_Human_Nature",
        poster: "img/the_red_queen.jpg",
        genre: ["Science", "Nonfiction", "Biology", "Evolution", "Psychology", "Sexuality", "Anthropology"]
    },
    {
        isbn: 9780876857335,
        title: "The Roominghouse Madrigals: Early Selected Poems, 1946-1966",
        overview: "The Roominghouse Madrigals is a selection of poetry from Charles Bukowski's early work. It shows a slightly softer side to the beloved barfly. <p> Charles Bukowski is one of America's best-known contemporary writers of poetry and prose, and, many would claim, its most influential and imitated poet. He was born in Andernach, Germany, and raised in Los Angeles, where he lived for fifty years. He published his first story in 1944, when he was twenty-four, and began writing poetry at the age of thirty-five. He died in San Pedro, California, on March 9, 1994, at the age of seventy-three, shortly after completing his last novel, Pulp (1994).",
        pages: "256",
        author: "Charles Bukowski",
        release_date: "January 1, 1988",
        wikipedia: "Charles_Bukowski",
        poster: "img/the_roominghouse_madrigals.jpg",
        genre: ["Poetry", "Fiction", "Classics", "American"]
    },
    {
        isbn: 9780671028442,
        title: "The Rose That Grew from Concrete",
        overview: "This collection of more than 100 poems that honestly and artfully confront topics ranging from poverty and motherhood to Van Gogh and Mandela is presented in Tupac Shakur's own handwriting on one side of the page, with a typed version on the opposite side.",
        pages: "176",
        author: "Tupac Shakur",
        release_date: "November 1, 1999",
        wikipedia: "The_Rose_That_Grew_from_Concrete_(poetry_collection)",
        poster: "img/the_rose_that_grew_from_concrete.jpg",
        genre: ["Poetry", "Nonfiction", "Music", "African American", "Biography", "Memoir", "Race"]
    },
    {
        isbn: 9780985724900,
        title: "The Scoop on Breasts: A Plastic Surgeon Busts the Myths",
        overview: "Whether you want to augment them, lift them, reduce them, or embrace them just the way they are, you will get the inside scoop about breasts and cosmetic breast surgery in this educational and entertaining book. <p> Dr Ted Eisenberg, a plastic surgeon who holds the Guinness Record for most breast augmentations done in a lifetime, candidly answers hundreds of actual patient questions like: Am I too old for breast augmentation? Will my implants boil in a hot tub? Do I need to replace them every 10 years? Joyce Eisenberg offers up titillating titbits and extra padding about breast goddesses, go-topless days, and Great Britain, whose women have the largest breasts in Europe. Filled with close to 200 photographs and illustrations, this is an amusing and revealing read. By book's end, you will consider the authors your BBFs: Bosom Buddies Forever.",
        pages: "208",
        author: "Ted Eisenberg, Joyce Eisenberg",
        release_date: "November 29, 2012",
        wikipedia: "Ted_Eisenberg",
        poster: "img/the_scoop_on_breasts.jpg",
        genre: ["Nonfiction", "Health"]
    },
    {
        isbn: 9780670858576,
        title: "The Secret Language of Birthdays: Personology Profiles for Each Day of the Year",
        overview: "Many people have long suspected, as astrologers believe, that the day you were born affects your personality. While no one knows exactly how or why, birthdays do tend to be uncannily accurate predictors of psychological tendencies. The Secret Language of Birthdays by Gary Goldschneider and Joost Effers describes in detail the characteristics and quirks of personality associated with being born on a particular day of the year. <p> The 366 personality profiles in The Secret Language of Birthdays are based on a combination of astrology, numerology, the tarot, and Gary Goldschneider's many years of observation of more than 14,000 people, including contemporary and historical figures. Goldschneider's theory of \"personology\" proposes that all of life is cyclical: people born on the same day occupy the same point in the year's cycle and thus share certain characteristics. <p> Learn what famous personalities were born on your birthday....Study your astrological sign and your personology profile....Your strengths, weaknesses, and major concerns will be illuminated while you are given practical advice and spiritual guidance. While you study your profile, you will find it hard to resist examining those of family, friends, colleagues, and favorite celebrities. <p> Non one who reads this book can feel left out, since each one of us has a birthday. The Secret Language of Birthdays may help to bring people to a better understanding of themselves and of others, including those living now, those who have gone before, and even those yet to come. The Secret Language of Birthdays is truly a celebration of our differences and similarities as human beings.",
        pages: "832",
        author: "Gary Goldschneider, Joost Elffers",
        release_date: "January 1, 1994",
        wikipedia: "Gary_Goldschneider",
        poster: "img/the_secret_language_of_birthdays.jpg",
        genre: ["Astrology", "Reference", "Nonfiction", "Spirituality", "Self Help"]
    },
    {
        isbn: 9780670875276,
        title: "The Secret Language of Relationships: Your Complete Personology Guide to Any Relationship with Anyone",
        overview: "Created by Gary Goldschneider and Joost Elffers, this work is the companion volume to their best-selling The Secret Language of Birthdays. The first book presents \"personology,\" the study of personality types based on the theory that people born on the same day or even during the same week share unique characteristics. More detailed than traditional sun-sign astrology, with its twelve signature personality types, personology divides the year into forty-eight \"weeks,\" and, thus, describes the specific personality traits for those born during these weeks or periods. The Secret Language of Relationships examines 1,176 combinations - all forty-eight periods combined with one another. The Relationship Location Finder, printed on the book's front and back endpaper, is designed to make finding a particular relationship profile easy: Locate the place where the birthdays of the two people in question intersect to find the page number of the profile. Then learn what the relationship - whether real or theoretical - is all about. Relationships of all stripes are discussed - not just love and marriage - but friendship, career, parent-child, and sibling. Photographs of famous couples - in love and otherwise, more than 2,500 pairings - beautifully illustrate the text.",
        pages: "832",
        author: "Gary Goldschneider, Joost Elffers",
        release_date: "October 1, 1997",
        wikipedia: "Gary_Goldschneider",
        poster: "img/the_secret_language_of_relationships.jpg",
        genre: ["Astrology", "Reference", "Nonfiction", "Spirituality", "Self Help"]
    },
    {
        isbn: 9780553805093,
        title: "The Snowball: Warren Buffett and the Business of Life",
        overview: "Here is the book recounting the life and times of one of the most respected men in the world, Warren Buffett. The legendary Omaha investor has never written a memoir, but now he has allowed one writer, Alice Schroeder, unprecedented access to explore directly with him and with those closest to him his work, opinions, struggles, triumphs, follies, and wisdom. <p> Although the media track him constantly, Buffett himself has never told his full life story. His reality is private, especially by celebrity standards. Indeed, while the homespun persona that the public sees is true as far as it goes, it goes only so far. Warren Buffett is an array of paradoxes. He set out to prove that nice guys can finish first. Over the years he treated his investors as partners, acted as their steward, and championed honesty as an investor, CEO, board member, essayist, and speaker. At the same time he became the world’s richest man, all from the modest Omaha headquarters of his company Berkshire Hathaway. None of this fits the term “simple.” <p> When Alice Schroeder met Warren Buffett she was an insurance industry analyst and a gifted writer known for her keen perception and business acumen. Her writings on finance impressed him, and as she came to know him she realized that while much had been written on the subject of his investing style, no one had moved beyond that to explore his larger philosophy, which is bound up in a complex personality and the details of his life. Out of this came his decision to cooperate with her on the book about himself that he would never write. <p> Never before has Buffett spent countless hours responding to a writer’s questions, talking, giving complete access to his wife, children, friends, and business associates—opening his files, recalling his childhood. It was an act of courage, as The Snowball makes immensely clear. Being human, his own life, like most lives, has been a mix of strengths and frailties. Yet notable though his wealth may be, Buffett’s legacy will not be his ranking on the scorecard of wealth; it will be his principles and ideas that have enriched people’s lives. This book tells you why Warren Buffett is the most fascinating American success story of our time.",
        pages: "960",
        author: "Alice Schroeder",
        release_date: "January 1, 2008",
        wikipedia: "The_Snowball:_Warren_Buffett_and_the_Business_of_Life",
        poster: "img/the_snowball.jpg",
        genre: ["Biography", "Business", "Nonfiction", "Finance", "Economics", "Memoir", "History"]
    },
    {
        isbn: 9780805070040,
        title: "The Sorrows of Empire: Militarism, Secrecy, and the End of the Republic",
        overview: "From the author of the prophetic national bestseller Blowback , a startling look at militarism, American style, and its consequences abroad and at home <p> In the years after the Soviet Union imploded, the United States was described first as the globe’s “lone superpower,” then as a “reluctant sheriff,” next as the “indispensable nation,” and now, in the wake of 9/11, as a “New Rome.” Here, Chalmers Johnson thoroughly explores the new militarism that is transforming America and compelling its people to pick up the burden of empire. <p> Reminding us of the classic warnings against militarism—from George Washington’s farewell address to Dwight Eisenhower’s denunciation of the military-industrial complex—Johnson uncovers its roots deep in our past. Turning to the present, he maps America’s expanding empire of military bases and the vast web of services that supports them. He offers a vivid look at the new caste of professional warriors who have infiltrated multiple branches of government, who classify as “secret” everything they do, and for whom the manipulation of the military budget is of vital interest. <p> Among Johnson’s provocative conclusions is that American militarism is putting an end to the age of globalization and bankrupting the United States, even as it creates the conditions for a new century of virulent blowback. The Sorrows of Empire suggests that the former American republic has already crossed its Rubicon—with the Pentagon leading the way.",
        pages: "400",
        author: "Chalmers Johnson",
        release_date: "January 1, 2003",
        wikipedia: "Chalmers_Johnson",
        poster: "img/the_sorrows_of_empire.jpg",
        genre: ["Politics", "History", "Nonfiction", "War", "American History", "American", "Military Fiction"]
    },
    {
        isbn: 9780394446301,
        title: "The Source",
        overview: "In his signature style of grand storytelling, James Michener sweeps us back through time to the Holy Land, thousands of years ago. By exploring the lives and discoveries of modern archaeologists excavating the site of Tell Makor, Michener vividly re-creates life in and around an ancient city during critical periods of its existence, and traces the profound history of the Jews, including that of the early Hebrews and their persecution, the impact of Christianity on the Jewish world, the Crusades, and the Spanish Inquisition. Michener weaves his epic tale of love, strength, and faith until at last he arrives at the founding of Israel and the modern conflict in the Middle East. The Source is not only a compelling history of the Holy Land and its people but a richly written saga that encompasses the development of Western civilization and the great religious and cultural ideas that have shaped our world.",
        pages: "1,080",
        author: "James A. Michener",
        release_date: "April 12, 1965",
        wikipedia: "The_Source_(novel)",
        poster: "img/the_source.jpg",
        genre: ["Historical Fiction", "Fiction", "Historical", "Israel", "Religion", "Judaism", "Novels"]
    },
    {
        isbn: 9782070360024,
        title: "The Stranger",
        overview: "Published in 1942 by French author Albert Camus, The Stranger has long been considered a classic of twentieth-century literature. Le Monde ranks it as number one on its \"100 Books of the Century\" list. Through this story of an ordinary man unwittingly drawn into a senseless murder on a sundrenched Algerian beach, Camus explores what he termed \"the nakedness of man faced with the absurd.\"",
        pages: "159",
        author: "Albert Camus",
        release_date: "May 19, 1942",
        wikipedia: "The_Stranger_(Camus_novel)",
        poster: "img/the_stranger.jpg",
        genre: ["Classics", "Fiction", "Philosophy", "Literature", "Novels", "French Literature"]
    },
    {
        isbn: 9780451524935,
        title: "The Tao of Pooh",
        overview: "The Wisdom of Pooh. <p> Is there such thing as a Western Taoist? Benjamin Hoff says there is, and this Taoist's favorite food is honey. Through brilliant and witty dialogue with the beloved Pooh-bear and his companions, the author of this smash bestseller explains with ease and aplomb that rather than being a distant and mysterious concept, Taoism is as near and practical to us as our morning breakfast bowl. <p> Romp through the enchanting world of Winnie-the-Pooh while soaking up invaluable lessons on simplicity and natural living.",
        pages: "158",
        author: "Benjamin Hoff",
        release_date: "April 28, 1982",
        wikipedia: "The_Tao_of_Pooh",
        poster: "img/the_tao_of_pooh.jpg",
        genre: ["Philosophy", "Nonfiction", "Spirituality", "Religion", "Self Help", "Taoism"]
    },
    {
        isbn: 9780316346627,
        title: "The Tipping Point: How Little Things Can Make a Big Difference",
        overview: "The tipping point is that magic moment when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Just as a single sick person can start an epidemic of the flu, so too can a small but precisely targeted push cause a fashion trend, the popularity of a new product, or a drop in the crime rate. This widely acclaimed bestseller, in which Malcolm Gladwell explores and brilliantly illuminates the tipping point phenomenon, is already changing the way people throughout the world think about selling products and disseminating ideas.",
        pages: "301",
        author: "Malcolm Gladwell",
        release_date: "January 1, 2000",
        wikipedia: "The_Tipping_Point",
        poster: "img/the_tipping_point.jpg",
        genre: ["Nonfiction", "Business", "Psychology", "Sociology", "Self Help", "Science", "Economics"]
    },
    {
        isbn: 9780451524935,
        title: "The Trial",
        overview: "Written in 1914 but not published until 1925, a year after Kafka’s death, The Trial is the terrifying tale of Josef K., a respectable bank officer who is suddenly and inexplicably arrested and must defend himself against a charge about which he can get no information. Whether read as an existential tale, a parable, or a prophecy of the excesses of modern bureaucracy wedded to the madness of totalitarianism, The Trial has resonated with chilling truth for generations of readers.",
        pages: "255",
        author: "Franz Kafka",
        release_date: "April 26, 1925",
        wikipedia: "The_Trial",
        poster: "img/the_trial.jpg",
        genre: ["Classics", "Fiction", "Philosophy", "Literature", "Novels", "Dystopia"]
    },
    {
        isbn: 9780060507428,
        title: "The Valachi Papers",
        overview: "The First Inside Account of the Mafia <p> In the 1960s a disgruntled soldier in New York's Genovese Crime Family decided to spill his guts. His name was Joseph Valachi. Daring to break the Mob's code of silence for the first time, Valachi detailed the organization of organized crime from the capos, or bosses, of every Family, to the hit men who \"clipped\" rivals and turncoats. With a phenomenal memory for names, dates, addresses, phone numbers—and where the bodies were buried—Joe Valachi provided the chilling facts that led to the arrest and conviction of America's major crime figures. <p> The rest is history. <p> Never again would the Mob be protected by secrecy. For the Mafia, Valachi's name would become synonymous with betrayal. But his stunning exposé. broke the back of America's Cosa Nostra and stands today as the classic about America's Mob, a fascinating tale of power and terror, big money, crime ... and murder.",
        pages: "304",
        author: "Peter Maas",
        release_date: "January 1, 1968",
        wikipedia: "The_Valachi_Papers_(book)",
        poster: "img/the_valachi_papers.jpg",
        genre: ["True Crime", "Nonfiction", "Crime", "History", "Biography", "American History", "Mystery"]
    },
    {
        isbn: 9780316414241,
        title: "The War on Normal People: The Truth About America's Disappearing Jobs and Why Universal Basic Income Is Our Future",
        overview: "From 2020 Democratic presidential candidate Andrew Yang, a captivating account of how \"a skinny Asian kid from upstate\" became a successful entrepreneur, only to find a new mission: calling attention to the urgent steps America must take, including Universal Basic Income, to stabilize our economy amid rapid technological change and automation. <p> The shift toward automation is about to create a tsunami of unemployment. Not in the distant future—now. One recent estimate predicts 45 million American workers will lose their jobs within the next twelve years—jobs that won't be replaced. In a future marked by restlessness and chronic unemployment, what will happen to American society? <p> In The War on Normal People, Andrew Yang paints a dire portrait of the American economy. Rapidly advancing technologies like artificial intelligence, robotics and automation software are making millions of Americans' livelihoods irrelevant. The consequences of these trends are already being felt across our communities in the form of political unrest, drug use, and other social ills. The future looks dire-but is it unavoidable? <p> In The War on Normal People, Yang imagines a different future—one in which having a job is distinct from the capacity to prosper and seek fulfillment. At this vision's core is Universal Basic Income, the concept of providing all citizens with a guaranteed income-and one that is rapidly gaining popularity among forward-thinking politicians and economists. Yang proposes that UBI is an essential step toward a new, more durable kind of economy, one he calls \"human capitalism.\"",
        pages: "304",
        author: "Andrew Yang",
        release_date: "May 22, 2018",
        wikipedia: "The_War_on_Normal_People",
        poster: "img/the_war_on_normal_people.jpg",
        genre: ["Nonfiction", "Politics", "Economics", "Business", "Technology", "Sociology"]
    },
    {
        isbn: 9781591792574,
        title: "The Way of the Superior Man: A Spiritual Guide to Mastering the Challenges of Women, Work, and Sexual Desire",
        overview: "What is your true purpose in life? What do women really want? What makes a good lover? If you're a man reading this, you've undoubtedly asked yourself these questions—but you may not have had much luck answering them. Until now. <p> In The Way of the Superior Man, David Deida explores the most important issues in men's lives—from career and family to women and intimacy to love and spirituality and relationships—to offer a practical guidebook for living a masculine life of integrity, authenticity, and freedom. Join this bestselling author and internationally renowned expert on sexual spirituality for straightforward advice, empowering skills, body practices, and more to help you realize a life of fulfillment, immediately and without compromise. <p> \"It is time to evolve beyond the macho jerk ideal, all spine and no heart,\" writes David Deida. \"It is also time to evolve beyond the sensitive and caring wimp ideal, all heart and no spine.\" The Way of the Superior Man presents the ultimate challenge—and reward—for today's man: to discover the 'unity of heart and spine' through the full expression of consciousness and love in the infinite openness of the present moment.",
        pages: "207",
        author: "David Deida",
        release_date: "January 1, 1997",
        wikipedia: "David_Deida",
        poster: "img/the_way_of_the_superior_man.jpg",
        genre: ["Self Help", "Nonfiction", "Psychology", "Philosophy", "Relationships", "Personal Development", "Spirituality"]
    },
    {
        isbn: 9781137278463,
        title: "The Zero Marginal Cost Society: The Internet of Things, the Collaborative Commons, and the Eclipse of Capitalism",
        overview: "In The Zero Marginal Cost Society, New York Times bestselling author Jeremy Rifkin describes how the emerging Internet of Things is speeding us to an era of nearly free goods and services, precipitating the meteoric rise of a global Collaborative Commons and the eclipse of capitalism. <p> Rifkin uncovers a paradox at the heart of capitalism that has propelled it to greatness but is now taking it to its death—the inherent entrepreneurial dynamism of competitive markets that drives productivity up and marginal costs down, enabling businesses to reduce the price of their goods and services in order to win over consumers and market share. (Marginal cost is the cost of producing additional units of a good or service, if fixed costs are not counted.) While economists have always welcomed a reduction in marginal cost, they never anticipated the possibility of a technological revolution that might bring marginal costs to near zero, making goods and services priceless, nearly free, and abundant, and no longer subject to market forces. <p> Now, a formidable new technology infrastructure—the Internet of things (IoT)—is emerging with the potential of pushing large segments of economic life to near zero marginal cost in the years ahead. Rifkin describes how the Communication Internet is converging with a nascent Energy Internet and Logistics Internet to create a new technology platform that connects everything and everyone. Billions of sensors are being attached to natural resources, production lines, the electricity grid, logistics networks, recycling flows, and implanted in homes, offices, stores, vehicles, and even human beings, feeding Big Data into an IoT global neural network. Prosumers can connect to the network and use Big Data, analytics, and algorithms to accelerate efficiency, dramatically increase productivity, and lower the marginal cost of producing and sharing a wide range of products and services to near zero, just like they now do with information goods. <p> The plummeting of marginal costs is spawning a hybrid economy—part capitalist market and part Collaborative Commons—with far reaching implications for society, according to Rifkin. Hundreds of millions of people are already transferring parts of their economic lives to the global Collaborative Commons. Prosumers are plugging into the fledgling IoT and making and sharing their own information, entertainment, green energy, and 3D-printed products at near zero marginal cost. They are also sharing cars, homes, clothes and other items via social media sites, rentals, redistribution clubs, and cooperatives at low or near zero marginal cost. Students are enrolling in free massive open online courses (MOOCs) that operate at near zero marginal cost. Social entrepreneurs are even bypassing the banking establishment and using crowdfunding to finance startup businesses as well as creating alternative currencies in the fledgling sharing economy. In this new world, social capital is as important as financial capital, access trumps ownership, sustainability supersedes consumerism, cooperation ousts competition, and \"exchange value\" in the capitalist marketplace is increasingly replaced by \"sharable value\" on the Collaborative Commons. <p> Rifkin concludes that capitalism will remain with us, albeit in an increasingly streamlined role, primarily as an aggregator of network services and solutions, allowing it to flourish as a powerful niche player in the coming era. We are, however, says Rifkin, entering a world beyond markets where we are learning how to live together in an increasingly interdependent global Collaborative Commons.",
        pages: "368",
        author: "Jeremy Rifkin",
        release_date: "April 1, 2014",
        wikipedia: "Jeremy_Rifkin",
        poster: "img/the_zero_marginal_cost_society.jpg",
        genre: ["Economics", "Nonfiction", "Business", "Politics", "Technology", "Science", "Society"]
    },
    {
        isbn: 9781585424337,
        title: "Think and Grow Rich",
        overview: "Think and Grow Rich has been called the \"Granddaddy of All Motivational Literature.\" It was the first book to boldly ask, \"What makes a winner?\" The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himself. The most famous of all teachers of success spent \"a fortune and the better part of a lifetime of effort\" to produce the \"Law of Success\" philosophy that forms the basis of his books and that is so powerfully summarized in this one. <p> In the original Think and Grow Rich, published in 1937, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles. In the updated version, Arthur R. Pell, Ph.D., a nationally known author, lecturer, and consultant in human resources management and an expert in applying Hill's thought, deftly interweaves anecdotes of how contemporary millionaires and billionaires, such as Bill Gates, Mary Kay Ash, Dave Thomas, and Sir John Templeton, achieved their wealth. Outmoded or arcane terminology and examples are faithfully refreshed to preclude any stumbling blocks to a new generation of readers.",
        pages: "320",
        author: "Napoleon Hill",
        release_date: "January 1, 1937",
        wikipedia: "Think_and_Grow_Rich",
        poster: "img/think_and_grow_rich.jpg",
        genre: ["Business", "Self Help", "Nonfiction", "Finance", "Personal Development", "Psychology"]
    },
    {
        isbn: 9780679772644,
        title: "True and False: Heresy and Common Sense for the Actor",
        overview: "The Pulitzer Prize winning playwright, director and teacher has written a blunt, unsparingly honest guide to acting. In True and False David Mamet overturns conventional opinion and tells aspiring actors what they really need to know. He leaves no aspect of acting untouched: how to judge the role, approach the part, work with the playwright; the right way to undertake auditions and the proper approach to agents and the business in general. True and False slaughters a wide range of sacred cows and yet offers an invaluable guide to the acting profession",
        pages: "127",
        author: "David Mamet",
        release_date: "January 1, 1997",
        wikipedia: "True_and_False:_Heresy_and_Common_Sense_for_the_Actor",
        poster: "img/true_and_false.jpg",
        genre: ["Theatre", "Nonfiction", "Film", "Writing"]
    },
    {
        isbn: 9780394575971,
        title: "Trump: Surviving at the Top",
        overview: "The business magnate discusses his purchases of the Eastern Shuttle and Plaza Hotel, his construction of the Taj Mahal, and his sponsorship of heavyweight boxing, and gives advice on dealing with success and the importance of toughness",
        pages: "229",
        author: "Donald J. Trump",
        release_date: "August 14, 1990",
        wikipedia: "Trump:_Surviving_at_the_Top",
        poster: "img/trump_surviving_at_the_top.jpg",
        genre: ["Business", "Biography", "Self Help", "Autobiography", "Nonfiction"]
    },
    {
        isbn: 9780345479174,
        title: "Trump: The Art of the Deal",
        overview: "Trump reveals the business secrets that have made him America’s foremost deal maker! <p> “I like thinking big. I always have. To me it’s very simple: If you’re going to be thinking anyway, you might as well think big.”—Donald J. Trump <p> Here is Trump in action—how he runs his business and how he runs his life—as he meets the people he needs to meet, chats with family and friends, clashes with enemies, and changes the face of the New York City skyline. But even a maverick plays by rules, and Trump has formulated eleven guidelines for success. He isolates the common elements in his greatest deals; he shatters myths; he names names, spells out the zeros, and fully reveals the deal-maker’s art. And throughout, Trump talks—really talks—about how he does it. Trump: The Art of the Deal is an unguarded look at the mind of a brilliant entrepreneur and an unprecedented education in the practice of deal-making. It’s the most streetwise business book there is—and the ultimate read for anyone interested in achieving money and success, and knowing the man behind the spotlight.",
        pages: "384",
        author: "Donald J. Trump",
        release_date: "November 1, 1987",
        wikipedia: "Trump:_The_Art_of_the_Deal",
        poster: "img/trump_the_art_of_the_deal.jpg",
        genre: ["Business", "Biography", "Nonfiction", "Politics", "Self Help", "Finance", "Autobiography"]
    },
    {
        isbn: 9780451524935,
        title: "Tuesdays with Morrie",
        overview: "Maybe it was a grandparent, or a teacher or a colleague. Someone older, patient and wise, who understood you when you were young and searching, and gave you sound advice to help you make your way through it. For Mitch Albom, that person was Morrie Schwartz, his college professor from nearly twenty years ago. <p> Maybe, like Mitch, you lost track of this mentor as you made your way, and the insights faded. Wouldn't you like to see that person again, ask the bigger questions that still haunt you? <p> Mitch Albom had that second chance. He rediscovered Morrie in the last months of the older man's life. Knowing he was dying of ALS - or motor neurone disease - Mitch visited Morrie in his study every Tuesday, just as they used to back in college. Their rekindled relationship turned into one final 'class': lessons in how to live.",
        pages: "210",
        author: "Mitch Albom",
        release_date: "August 18, 1997",
        wikipedia: "Tuesdays_with_Morrie",
        poster: "img/tuesdays_with_morrie.jpg",
        genre: ["Nonfiction", "Memoir", "Biography", "Classics", "Philosophy", "Self Help"]
    },
    {
        isbn: 9780609600726,
        title: "Tupac Shakur",
        overview: "Tupac Shakur was one of music's most successful, controversial, and enigmatic artists. His untimely passing, however, left many questions unanswered about his life; the line between the image and the reality of his \"thug\" lifestyle remains blurred at best to this day. Yet, the mark that Shakur left on hip-hop culture is indelible, and the popularity among his fans is unquestionable. <p> From the editors of VIBE magazine comes Tupac Shakura compelling tribute to one of music's most profound talents. Published in time to commemorate the anniversary of Shakur's death (September 13, 1996), Tupac Shakur traces the pivotal moments in the artist's short but brilliant life from his tough-love upbringing as the son of a former Black Panther and introduction to rap as a backup dancer and roadie, to his meteoric rise to the top of the rap world and a turbulent movie career. <p> Told through VIBE'S most poignant and often prophetic articles on and interviews with Tupac along with more than 100 full-color photographs, Tupac Shakur is a telling portrait of Shakur's mercurial life. In the book, readers will find extensive interviews with Tupac following his arrests in New York and Atlanta in 1994; a world-exclusive interview from Rikers Island in April 1995; another after his release from prison and being signed to Death Row Records in February 1996; and a final conversation conducted just two weeks before his death in September 1996. Also published for the first time, is an extremely candid interview VIBE online conducted with Shakur in June 1996.  With an introduction by Editor-in-Chief, Danyel Smith, memorial tributes from directors John Singleton and Ernest Dickerson, and rapper Chuck D of Public Enemy, and a foreword by Quincy Jones, Tupac Shakur offers an insider's perspective on one of music's most mythological talents from many in the entertainment industry who knew him the best. Tupac Shakur is a lasting testament to the many faces of this young artist a man who was built, even in death, to last.",
        pages: "160",
        author: "Alan Light",
        release_date: "September 29, 1998",
        wikipedia: "Tupac_Shakur",
        poster: "img/tupac_amaru_shakur.jpg",
        genre: ["Music", "Biography", "Nonfiction", "History"]
    },
    {
        isbn: 9780060930967,
        title: "Underboss: Sammy the Bull Gravano's Story of Life in the Mafia",
        overview: "In March of 1992, the highest-ranking member of the Mafia in America ever to defect broke his blood oath of silence and testified against his boss, John Gotti. He is Salvatore (Sammy the Bull) Gravano, second-in-command of the Gambino organized-crime family, the most powerful in the nation. Today, Gotti is serving life in prison without parole. And as a direct consequence of Gravano's testimony, Cosa Nostra - the Mafia's true name - is in shambles. In Underboss, based on dozens of hours of interviews with Gravano, much of it written in Sammy the Bull's own voice, we are ushered as never before into the uppermost secret inner sanctums of Cosa Nostra - an underworld of power, lust, greed, betrayal, deception, sometimes even honor, with the specter of violent death always poised in the wings. Gravano's is a story about starting out on the street, about killing and being killed, revealing the truth behind a quarter-century of shocking headlines. It is also a tragic story of a wasted life, of unalterable choices and the web of lies, weakness, and treachery that underlie the so-called Honored Society.",
        pages: "308",
        author: "Peter Maas",
        release_date: "April 1, 1997",
        wikipedia: "Underboss_(book)",
        poster: "img/underboss.jpg",
        genre: ["True Crime", "Nonfiction", "Biography", "Crime", "History", "Memoir"]
    },
    {
        isbn: 9780399161285,
        title: "Undisputed Truth",
        overview: "Philosopher, Broadway headliner, fighter, felon—Mike Tyson has defied stereotypes, expectations, and a lot of conventional wisdom during his three decades in the public eye. Bullied as a boy in the toughest, poorest neighborhood in Brooklyn, Tyson grew up to become one of the most thrilling and ferocious boxers of all time—and the youngest heavyweight champion ever. But his brilliance in the ring was often compromised by reckless behavior. Years of hard partying, violent fights, and criminal proceedings took their toll: by 2003, Tyson had hit rock bottom, a convicted felon, completely broke, the punch line to a thousand bad late-night jokes. Yet he fought his way back; the man who once admitted being addicted \"to everything\” regained his success, his dignity, and the love of his family. With a triumphant one-man stage show, his unforgettable performances in the Hangover films, and his newfound happiness and stability as a father and husband, Tyson’s story is an inspiring American original. <p> Brutally honest, raw, and often hilarious, Tyson chronicles his tumultuous highs and lows in the same sincere, straightforward manner we have come to expect from this legendary athlete. A singular journey from Brooklyn’s ghettos to worldwide fame to notoriety, and, finally, to a tranquil wisdom, Undisputed Truth is not only a great sports memoir but an autobiography for the ages.",
        pages: "592",
        author: "Mike Tyson, Larry Sloman",
        release_date: "November 28, 2013",
        wikipedia: "Mike_Tyson",
        poster: "img/undisputed_truth.jpg",
        genre: ["Biography", "Sports", "Nonfiction", "Autobiography", "Memoir"]
    },
    {
        isbn: 9781451636017,
        title: "Waking Up: A Guide to Spirituality Without Religion",
        overview: "For the millions of Americans who want spirituality without religion, Sam Harris’s new book is a guide to meditation as a rational spiritual practice informed by neuroscience and psychology. <p> From multiple New York Times bestselling author, neuroscientist, and “new atheist” Sam Harris, Waking Up is for the 30 percent of Americans who follow no religion, but who suspect that Jesus, Buddha, Lao Tzu, Rumi, and the other saints and sages of history could not have all been epileptics, schizophrenics, or frauds. Throughout the book, Harris argues that there are important truths to be found in the experiences of such contemplatives—and, therefore, that there is more to understanding reality than science and secular culture generally allow. <p> Waking Up is part seeker’s memoir and part exploration of the scientific underpinnings of spirituality. No other book marries contemplative wisdom and modern science in this way, and no author other than Sam Harris—a scientist, philosopher, and famous skeptic—could write it.",
        pages: "256",
        author: "Sam Harris",
        release_date: "January 1, 2014",
        wikipedia: "Waking_Up:_A_Guide_to_Spirituality_Without_Religion",
        poster: "img/waking_up.jpg",
        genre: ["Nonfiction", "Philosophy", "Spirituality", "Religion", "Psychology", "Self Help", "Science"]
    },
    {
        isbn: 9780061438295,
        title: "What Every BODY is Saying: An Ex-FBI Agent's Guide to Speed-Reading People",
        overview: "Read this book and send your nonverbal intelligence soaring. Joe Navarro, a former FBI counterintelligence officer and a recognized expert on nonverbal behavior, explains how to \"speed-read\" people: decode sentiments and behaviors, avoid hidden pitfalls, and look for deceptive behaviors. You'll also learn how your body language can influence what your boss, family, friends, and strangers think of you. You will discover: <p> The ancient survival instincts that drive body language Why the face is the least likely place to gauge a person's true feelings What thumbs, feet, and eyelids reveal about moods and motives The most powerful behaviors that reveal our confidence and true sentiments Simple nonverbals that instantly establish trust Simple nonverbals that instantly communicate authority <p> Filled with examples from Navarro's professional experience, this definitive book offers a powerful new way to navigate your world.",
        pages: "250",
        author: "Joe Navarro, Marvin Karlins",
        release_date: "April 15, 2008",
        wikipedia: "Joe_Navarro",
        poster: "img/what_every_body_Is_saying.jpg",
        genre: ["Psychology", "Nonfiction", "Self Help", "Communication", "Business", "Personal Development", "Science"]
    },
    {
        isbn: 9780061455902,
        title: "What Is Your Dangerous Idea? : Today's Leading Thinkers on the Unthinkable",
        overview: "From Copernicus to Darwin, to current-day thinkers, scientists have always promoted theories and unveiled discoveries that challenge everything society holds dear; ideas with both positive and dire consequences. Many thoughts that resonate today are dangerous not because they are assumed to be false, but because they might turn out to be true. What do the world's leading scientists and thinkers consider to be their most dangerous idea? <p> Through the leading online forum Edge (www.edge.org), the call went out, and this compelling and easily digestible volume collects the answers. From using medication to permanently alter our personalities to contemplating a universe in which we are utterly alone, to the idea that the universe might be fundamentally inexplicable, What Is Your Dangerous Idea? takes an unflinching look at the daring, breathtaking, sometimes terrifying thoughts that could forever alter our world and the way we live in it.",
        pages: "301",
        author: "John Brockman",
        release_date: "November 6, 2006",
        wikipedia: "What_Is_Your_Dangerous_Idea%3F",
        poster: "img/what_is_your_dangerous_idea.jpg",
        genre: ["Science", "Nonfiction", "Philosophy", "Essays", "Psychology", "Politics", "Religion"]
    },
    {
        isbn: 9780375508318,
        title: "What Makes Sammy Run?",
        overview: "What Makes Sammy Run? <p> Everyone of us knows someone who runs. He is one of the symp-toms of our times—from the little man who shoves you out of the way on the street to the go-getter who shoves you out of a job in the office to the Fuehrer who shoves you out of the world. And all of us have stopped to wonder, at some time or another, what it is that makes these people tick. What makes them run? <p> This is the question Schulberg has asked himself, and the answer is the first novel written with the indignation that only a young writer with talent and ideals could concentrate into a manuscript. It is the story of Sammy Glick, the man with a positive genius for being a heel, who runs through New York’s East Side, through newspaper ranks and finally through Hollywood, leaving in his wake the wrecked careers of his associates; for this is his tragedy and his chief characteristic—his congenital incapacity for friendship. <p> An older and more experienced novelist might have tempered his story and, in so doing, destroyed one of its outstanding qualities. Compromise would mar the portrait of Sammy Glick. Schulberg has etched it in pure vitriol, and dissected his victim with a precision that is almost frightening. <p> When a fragment of this book appeared as a short story in a national magazine, Schulberg was surprised at the number of letters he received from people convinced they knew Sammy Glick’s real name. But speculation as to his real identity would be utterly fruitless, for Sammy is a composite picture of a loud and spectacular minority bitterly resented by the many decent and sincere artists who are trying honestly to realize the measureless potentialities of motion pictures. To this group belongs Schulberg himself, who has not only worked as a screen writer since his graduation from Dartmouth College in 1936, but has spent his life, literally, in the heart of the motion-picture colony. In the course of finding out what makes Sammy run (an operation in which the reader is spared none of the grue-some details) Schulberg has poured out everything he has felt about that place. The result is a book which the publishers not only believe to be the most honest ever written about Hollywood, but a penetrating study of one kind of twentieth-century success that is peculiar to no single race of people or walk of life.",
        pages: "320",
        author: "Budd Schulberg",
        release_date: "January 1, 1941",
        wikipedia: "What_Makes_Sammy_Run%3F",
        poster: "img/what_makes_sammy_run.jpg",
        genre: ["Fiction", "Classics", "Novels", "Film", "Literature", "Philosophy", "American"]
    },
    {
        isbn: 9780060841812,
        title: "What We Believe But Cannot Prove: Today's Leading Thinkers on Science in the Age of Certainty",
        overview: "More than one hundred of the world's leading thinkers write about things they believe in, despite the absence of concrete proof. <p> Scientific theory, more often than not, is born of bold assumption, disparate bits of unconnected evidence, and educated leaps of faith. Some of the most potent beliefs among brilliant minds are based on supposition alone—yet that is enough to push those minds toward making the theory viable. <p> Eminent cultural impresario, editor, and publisher of Edge, John Brockman asked a group of leading scientists and thinkers to answer the question: What do you believe to be true even though you cannot prove it? This book brings together the very best answers from the most distinguished contributors. <p> Thought-provoking and hugely compelling, this collection of bite-size thought-experiments is a fascinating insight into the instinctive beliefs of some of the most brilliant minds today.",
        pages: "252",
        author: "John Brockman",
        release_date: "January 1, 2005",
        wikipedia: "What_We_Believe_but_Cannot_Prove",
        poster: "img/what_we_believe_but_cannot_prove.jpg",
        genre: ["Science", "Nonfiction", "Philosophy", "Essays", "Psychology", "Popular Science", "History"]
    },
    {
        isbn: 9780805082920,
        title: "Why Him? Why Her?: Finding Real Love By Understanding Your Personality Type",
        overview: "A groundbreaking book about how your personality type determines who you love. <p> Why do you fall in love with one person rather than another? In this fascinating and informative book, Helen Fisher, one of the world’s leading experts on romantic love, unlocks the hidden code of desire and attachment. Each of us, it turns out, primarily expresses one of four broad personality types—Explorer, Builder, Director, or Negotiator—and each of these types is governed by different chemical systems in the brain. Driven by this biology, we are attracted to partners who both mirror and complement our own personality type. <p> Based on entirely new research—including a detailed questionnaire completed by seven million people in thirty-three countries—Why Him? Why Her? will change your understanding of why you love him (or her) and help you use nature’s chemistry to find and keep your life partner.",
        pages: "222",
        author: "Helen Fisher",
        release_date: "January 1, 2009",
        wikipedia: "Helen_Fisher_(anthropologist)",
        poster: "img/why_him_why_her.jpg",
        genre: ["Psychology", "Nonfiction", "Relationships", "Self Help", "Science"]
    },
    {
        isbn: 9780007176151,
        title: "Wild Swans: Three Daughters of China",
        overview: "The story of three generations in twentieth-century China that blends the intimacy of memoir and the panoramic sweep of eyewitness history—a bestselling classic in thirty languages with more than ten million copies sold around the world, now with a new introduction from the author. <p> An engrossing record of Mao’s impact on China, an unusual window on the female experience in the modern world, and an inspiring tale of courage and love, Jung Chang describes the extraordinary lives and experiences of her family members: her grandmother, a warlord’s concubine; her mother’s struggles as a young idealistic Communist; and her parents’ experience as members of the Communist elite and their ordeal during the Cultural Revolution. Chang was a Red Guard briefly at the age of fourteen, then worked as a peasant, a “barefoot doctor,” a steelworker, and an electrician. As the story of each generation unfolds, Chang captures in gripping, moving—and ultimately uplifting—detail the cycles of violent drama visited on her own family and millions of others caught in the whirlwind of history.",
        pages: "562",
        author: "Jung Chang",
        release_date: "January 1, 1991",
        wikipedia: "Wild_Swans",
        poster: "img/wild_swans.jpg",
        genre: ["Nonfiction", "History", "China", "Biography", "Memoir", "Asia", "Historical"]
    },
    {
        isbn: 9780671723224,
        title: "Wiseguy",
        overview: "\"Wiseguy\" is Nicholas Pileggi's remarkable bestseller, the most intimate account ever printed of life inside the deadly high-stakes world of what some people call the Mafia. \"Wiseguy\" is Henry Hill's story, in fascinating, brutal detail, the never-before-revealed day-to-day life of a working mobster - his violence, his wild spending sprees, his wife, his mistresses, his code of honor.",
        pages: "320",
        author: "Nicholas Pileggi",
        release_date: "January 1, 1985",
        wikipedia: "Wiseguy_(book)",
        poster: "img/wiseguy.jpg",
        genre: ["Nonfiction", "True Crime", "Crime", "Biography", "History", "Memoir", "Autobiography"]
    },
    {
        isbn: 9781631680694,
        title: "Without a Doubt",
        overview: "This #1 New York Times bestseller is not just a book about a trial. It's a book about a woman. Marcia Clark takes us inside her head and her heart. Her voice is raw, incisive, disarming, unmistakable. Her story is both sweeping and deeply personal. It is the story of a woman who, when caught up in an event that galvanized an entire country, rose to that occasion with singular integrity, drive, honesty and grace. In a case that tore America apart, and that continues to haunt us as few events of history have, Marcia Clark emerged as the only true heroine, because she stood for justice, fought the good fight, and fought it well.",
        pages: "489",
        author: "Marcia Clark",
        release_date: "May 1, 1997",
        wikipedia: "Marcia_Clark",
        poster: "img/without_a_doubt.jpg",
        genre: ["True Crime", "Nonfiction", "Memoir", "Crime", "History", "Biography", "Law"]
    },
    {
        isbn: 9780451524935,
        title: "YOU: The Owner's Manual: An Insider's Guide to the Body that Will Make You Healthier and Younger",
        overview: "YOU: The Owner's Manual challenges preconceived notions about how the human body works and ages, and takes you on a fascinating grand tour of all your blood-pumping, food-digesting, and numbers-remembering systems and organs—including the heart, brain, lungs, immune system, bones, and sensory organs. <p> There are also 100 questions asked by you, and answered by the experts. For instance, do you know which of the following statements are true? <p> As you increase the amount you exercise, the rewards you gain from it increase as well. <p> If you're not a smoker, you have nothing to worry about when it comes to your lungs. <p> Your immune system always knows the difference between your own cells and enemy invaders. <p> The biggest threat to your arteries is cholesterol. <p> Memory loss is a natural, inevitable part of aging. <p> Stress is the greatest ager, and controlling it changes which of your genes is on. <p> Did you answer \"true\" for any of the above? Then take a look inside. Complete with exercise tips, nutritional guidelines, simple lifestyle changes, and alternative approaches, YOU: The Owner's Manual debunks myths and gives you an easy, comprehensive, and life-changing How-To plan—as well as great-tasting and calorie-saving recipes—that can help you live a healthier, younger, and better life.",
        pages: "544",
        author: "Michael F. Roizen, Mehmet C. Oz",
        release_date: "January 1, 2005",
        wikipedia: "Mehmet_Oz",
        poster: "img/you.jpg",
        genre: ["Health", "Nonfiction", "Reference", "Self Help", "Science", "Fitness", "Medical"]
    },
    {
        isbn: 9780060982027,
        title: "You've Got to Read This: Contemporary American Writers Introduce Stories that Held Them in Awe",
        overview: "Thirty-four of America's most distinguished fiction writers--including Oscar Hijuelos, John Irving, and Joyce Carol Oates--introduce the short stories that inspired them most. <p> A mother's tale / James Agee <p> Guy de Maupassant / Isaac Babel <p> Sonny's blues / James Baldwin <p> The school / Donald Barthelme <p> The Aleph / Jorge Luis Borges <p> A day in the open / Jane Bowles <p> A distant episode / Paul Bowles <p> The Star Cafe / Mary Caponegro <p> Reflections / Angela Carter <p> Cathedral / Raymond Carver <p> Goodbye, my brother / John Cleever <p> Gooseberries / Anton Chekhov <p> A Christmas carol / Charles Dickens <p> Pie dance / Molly Giles <p> Greatness strikes where it pleases / Lars Gustafsson <p> The interview / Ruth Prawer Jlabvala <p> The dead / James Joyce. In the penal colony / Franz Kafka <p> Girl / Jamaica Kincaid <p> The smallest woman in the world / Clarice Lispector <p> The daughters of the late colonel / Katherine Mansfield <p> Labor day dinner / Alice Munro <p> Spring in Fialta / Vladimir Nabokov <p> The things they carried / Tim O'Brien <p> A good man is hard to find / Flannery O'Connor <p> I stand here ironing / Tillie Olsen <p> Wants / Grace Paley <p> In dreams begin responsibilities / Delmore Schwartz <p> The man to send rain clouds / Leslie Marmon Silko <p> Helping / Robert Stone <p> Master and man / Leo Tolstoy. Packed dirt, churchgoing, a dying cat, a traded car / John Updike <p> The flowers / Alice Walker <p> No place for you, my love / Eudora Welty <p> Paper garden / Jerome Wilson",
        pages: "630",
        author: "Ron Hansen, Jim Shepard",
        release_date: "January 1, 1994",
        wikipedia: "Ron_Hansen_(novelist)",
        poster: "img/youve_got_to_read_this.jpg",
        genre: ["Short Stories", "Fiction", "Anthologies", "Writing", "Essays"]
    },
    {
        isbn: 9781250078810,
        title: "Young China: How the Restless Generation Will Change Their Country and the World",
        overview: "A close up look at the Chinese generation born after 1990 exploring through personal encounters how young Chinese feel about everything from money and sex, to their government, the West, and China's shifting role in the world--not to mention their love affair with food, karaoke, and travel. Set primarily in the Eastern 2nd tier city of Suzhou and the budding Western metropolis of Chengdu, the book charts the touchstone issues this young generation faces. From single-child pressure, to test taking madness and the frenzy to buy an apartment as a prerequisite to marriage, from one-night-stands to an evolving understanding of family, Young China offers a fascinating portrait of the generation who will define what it means to be Chinese in the modern era. <p> Zak Dychtwald was twenty when he first landed in China. He spent years deeply immersed in the culture, learning the language and hanging out with his peers, in apartment shares and hostels, on long train rides and over endless restaurant meals.",
        pages: "304",
        author: "Zak Dychtwald",
        release_date: "February 13, 2018",
        wikipedia: "",
        poster: "img/young_china.jpg",
        genre: ["China", "Nonfiction", "History", "Sociology", "Asia", "Cultural", "Politics"]
    }
];
$(function () {
    $.when.apply($, booksData.forEach(function (item) {
        const releaseDate = new Date(item.release_date);
        const myReleaseDate = (releaseDate.getMonth() + 1) * 30 + releaseDate.getDate() + releaseDate.getFullYear() * 365;
        const genreFilter = item.genre.map(g => g.toLowerCase().replaceAll(' ', '-')).join(' ');

        $(".container-fluid").append(`
            <div ontouchstart="this.classList.toggle('hover');" class="flip-container ${genreFilter}">
                <div class="flipper">
                    <div class="front">
                        <img class="poster lazyload" src="${item.poster}" alt="" />
                    </div>
                    <div class="back">
                        <ul>
                            <li class="original_title">${item.title}</li>
                            <li class="overview">${item.overview}</li>
                            <li class="pages"><b>Pages:</b> <span class="psudo-pages">${item.pages}</span></li>
                            <li class="author"><b>Author:</b> <span class="psudo-author">${item.author}</span></li>
                            <li class="genre"><b>Genre:</b> ${item.genre.join(', ')}</li>
                            <li class="release_date"><b>Release date:</b> ${item.release_date}</li>
                            <li class="psudo-release_date">${myReleaseDate}</li>
                            <li class="wikipedia">
                                <a class="aWikipedia" href="https://en.wikipedia.org/wiki/${item.wikipedia}" target="_blank">
                                    <i class="fa fa-wikipedia-w" aria-hidden="true"></i> Wikipedia
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`);

    })).then(function () {
        const gird = $(".container-fluid").isotope({
            itemSelector: ".flip-container",
            masonry: {
                columnWidth: ".flip-container",
                isFitWidth: true,
                layoutMode: 'fitRows'
            },
            getSortData: {
                titleAscending: ".original_title",
                titleDescending: ".original_title",
                pageShort: ".psudo-pages parseInt",
                pageLong: ".psudo-pages parseInt",
                releaseNew: ".psudo-release_date parseInt",
                releaseOld: ".psudo-release_date parseInt"
            },
            sortAscending: {
                titleAscending: true,
                titleDescending: false,
                pageShort: true,
                pageLong: false,
                releaseNew: false,
                releaseOld: true
            },
        });

        const filterOptions = allGenre.sort().map(genre => {
            const className = '.' + genre.toLowerCase().replaceAll(' ', '-');
            return `<option data-filter="${className}">${genre} (${$(className).length})</option>`;
        }).join('');

        $('select.filter').html(`<option data-filter="*">All Genre (${booksData.length})</option>` + filterOptions)

        //Filter dropdown
        $("select.filter").on("change", function () {
            const optionFilter = $(this).find("option:selected");
            const filterValue = optionFilter.attr("data-filter");
            gird.isotope({ filter: filterValue });
            $(".search-book").val("");
        });

        //Sort dropdown
        $("select.sort").on("change", function () {
            const optionSort = $(this).find("option:selected");
            const sortValue = optionSort.attr("data-sort-value");
            gird.isotope({ sortBy: sortValue });
            $(".search-book").val("");
        });

        $(".search-book").keyup(debounce(function () {
            const qsRegex = new RegExp($(".search-book").val(), "gi");
            gird.isotope({
                filter: function () {
                    return qsRegex ? $(this).find(".original_title").text().match(qsRegex) : true;
                }
            });
        }));

        //Debounce so filtering doesn't happen every millisecond
        function debounce(fn, threshold) {
            var timeout;
            return function debounced() {
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(fn, threshold || 100);
            };
        }

        lazyload();
    });

});


