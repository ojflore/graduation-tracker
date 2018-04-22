var UndergraduateCatalog =
    {
        title: "Bachelor of Science: Information Technology",
        value: "2",
        categories: [
            {
                title: 'University Core Curriculum (42 Credits)',
                value: "2",
                subcategories: [
                    {
                        title: 'My Required Courses', // <-- table
                        courses: [ // <-- rows
                            //Next Course Row
                            {
                                title: 'COMM 101', // <-- cells
                                description: 'Oral Comm. & Pres.',// <-- cells
                                credits: '3.0',// <-- cells
                                completed: false, // <-- cells
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Row
                            {
                                title: 'ENGL 101',
                                description: 'College Composition',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Row
                            {
                                title: 'UNIV 101',
                                description: 'City-University Life',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Row
                            {
                                title: 'CMPS 480',
                                description: 'Senior Capstone',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"],
                                isCompleted: false
                            }
                        ]//ends courses
                    },//ends table/subcategory

                    {
                        title: 'Thematic', // <-- table
                        courses: [ // <-- rows
                            //New Course
                            {
                                title: 'Explore the World - Choice 1',
                                description: [
                                    //Input for dropdown boxes
                                    {
                                        course_code: "ARBC 101",
                                        val: "abc",
                                        course_description: "Elementary Arabic I"
                                    },
                                    {
                                        course_code: "ARBC 102",
                                        course_description: "Elementary Arabic II"
                                    },
                                    {
                                        course_code: "ARBC 201",
                                        course_description: "Intermediate Arabic I"
                                    },
                                    {
                                        course_code: "ARBC 202",
                                        course_description: "Intermediate Arabic II"
                                    },
                                    {
                                        course_code: "ECON 201",
                                        course_description: "Principles of Macroeconomics"
                                    },
                                    {
                                        course_code: "FREN 101",
                                        course_description: "Elementary French I"
                                    },
                                    {
                                        course_code: "FREN 101",
                                        course_description: "Elementary French I"
                                    },
                                    {
                                        course_code: "FREN 102",
                                        course_description: "Elementary French II"
                                    },
                                    {
                                        course_code: "FREN 201",
                                        course_description: "Intermediate French I"
                                    },
                                    {
                                        course_code: "FREN 202",
                                        course_description: "Intermediate French II"
                                    },
                                    {
                                        course_code: "GCS 175",
                                        course_description: "Intro to Global Cultural Studies"
                                    },
                                    {
                                        course_code: "GCS 225",
                                        course_description: "Anthropology of Belief"
                                    },
                                    {
                                        course_code: "GCS 230",
                                        course_description: "Literature: A Global View"
                                    },
                                    {
                                        course_code: "GCS 295",
                                        course_description: "Special Topics in GCS"
                                    },
                                    {
                                        course_code: "GCS/MLNG 205",
                                        course_description: "Languages of the World"
                                    },
                                    {
                                        course_code: "HIST 201",
                                        course_description: "Western Civilization I"
                                    },
                                    {
                                        course_code: "HIST 202",
                                        course_description: "Western Civilization II"
                                    },
                                    {
                                        course_code: "HIST 255",
                                        course_description: "Military History"
                                    },
                                    {
                                        course_code: "MLNG 221",
                                        course_description: "Spanish Literature in Translation"
                                    },
                                    {
                                        course_code: "MLNG 225",
                                        course_description: "Representation of Minorities in World Literature"
                                    },
                                    {
                                        course_code: "MLNG 228",
                                        course_description: "Eastern European Literature/Culture"
                                    },
                                    {
                                        course_code: "PADM 210",
                                        course_description: "Public Administration"
                                    },
                                    {
                                        course_code: "POLS 205",
                                        course_description: "World Geography"
                                    },
                                    {
                                        course_code: "POLS 250",
                                        course_description: "Intro to Study of Gov’t Systems"
                                    },
                                    {
                                        course_code: "PHIL 100",
                                        course_description: "World Religions"
                                    },
                                    {
                                        course_code: "SOC 111",
                                        course_description: "World Cultures"
                                    },
                                    {
                                        course_code: "SOC/MLNG 260",
                                        course_description: "Japanese Culture"
                                    },
                                    {
                                        course_code: "SPAN 101",
                                        course_description: "Elementary Spanish I"
                                    },
                                    {
                                        course_code: "SPAN 102",
                                        course_description: "Elementary Spanish II"
                                    },
                                    {
                                        course_code: "SPAN 201 ",
                                        course_description: "Intermediate Spanish I"
                                    },
                                    {
                                        course_code: "SPAN 201 ",
                                        course_description: "Intermediate Spanish II"
                                    },
                                    {
                                        course_code: "THEA 225 ",
                                        course_description: "History Theatre I"
                                    },
                                    {
                                        course_code: "HEA 226",
                                        course_description: "History Theatre II"
                                    },
                                    {
                                        course_code: "TRAN",
                                        course_description: "Approved Transfer"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //New Course
                            {
                                title: 'Explore the World - Choice 2',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "ARBC 101",
                                        course_description: "Elementary Arabic I"
                                    },
                                    {
                                        course_code: "ARBC 102",
                                        course_description: "Elementary Arabic II"
                                    },
                                    {
                                        course_code: "ARBC 201",
                                        course_description: "Intermediate Arabic I"
                                    },
                                    {
                                        course_code: "ARBC 202",
                                        course_description: "Intermediate Arabic II"
                                    },
                                    {
                                        course_code: "ECON 201",
                                        course_description: "Principles of Macroeconomics"
                                    },
                                    {
                                        course_code: "FREN 101",
                                        course_description: "Elementary French I"
                                    },
                                    {
                                        course_code: "FREN 101",
                                        course_description: "Elementary French I"
                                    },
                                    {
                                        course_code: "FREN 102",
                                        course_description: "Elementary French II"
                                    },
                                    {
                                        course_code: "FREN 201",
                                        course_description: "Intermediate French I"
                                    },
                                    {
                                        course_code: "FREN 202",
                                        course_description: "Intermediate French II"
                                    },
                                    {
                                        course_code: "GCS 175",
                                        course_description: "Intro to Global Cultural Studies"
                                    },
                                    {
                                        course_code: "GCS 225",
                                        course_description: "Anthropology of Belief"
                                    },
                                    {
                                        course_code: "GCS 230",
                                        course_description: "Literature: A Global View"
                                    },
                                    {
                                        course_code: "GCS 295",
                                        course_description: "Special Topics in GCS"
                                    },
                                    {
                                        course_code: "GCS/MLNG 205",
                                        course_description: "Languages of the World"
                                    },
                                    {
                                        course_code: "HIST 201",
                                        course_description: "Western Civilization I"
                                    },
                                    {
                                        course_code: "HIST 202",
                                        course_description: "Western Civilization II"
                                    },
                                    {
                                        course_code: "HIST 255",
                                        course_description: "Military History"
                                    },
                                    {
                                        course_code: "MLNG 221",
                                        course_description: "Spanish Literature in Translation"
                                    },
                                    {
                                        course_code: "MLNG 225",
                                        course_description: "Representation of Minorities in World Literature"
                                    },
                                    {
                                        course_code: "MLNG 228",
                                        course_description: "Eastern European Literature/Culture"
                                    },
                                    {
                                        course_code: "PADM 210",
                                        course_description: "Public Administration"
                                    },
                                    {
                                        course_code: "POLS 205",
                                        course_description: "World Geography"
                                    },
                                    {
                                        course_code: "POLS 250",
                                        course_description: "Intro to Study of Gov’t Systems"
                                    },
                                    {
                                        course_code: "PHIL 100",
                                        course_description: "World Religions"
                                    },
                                    {
                                        course_code: "SOC 111",
                                        course_description: "World Cultures"
                                    },
                                    {
                                        course_code: "SOC/MLNG 260",
                                        course_description: "Japanese Culture"
                                    },
                                    {
                                        course_code: "SPAN 101",
                                        course_description: "Elementary Spanish I"
                                    },
                                    {
                                        course_code: "SPAN 102",
                                        course_description: "Elementary Spanish II"
                                    },
                                    {
                                        course_code: "SPAN 201 ",
                                        course_description: "Intermediate Spanish I"
                                    },
                                    {
                                        course_code: "SPAN 201 ",
                                        course_description: "Intermediate Spanish II"
                                    },
                                    {
                                        course_code: "THEA 225 ",
                                        course_description: "History Theatre I"
                                    },
                                    {
                                        course_code: "HEA 226",
                                        course_description: "History Theatre II"
                                    },
                                    {
                                        course_code: "TRAN",
                                        course_description: "Approved Transfer"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'Investigate Science',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "BIOL 101",
                                        course_description: "General Biology I"
                                    },
                                    {
                                        course_code: "BIOL 102",
                                        course_description: "General Biology II"
                                    },
                                    {
                                        course_code: "EDUC 220",
                                        course_description: "Family and Community Diversity"
                                    },
                                    {
                                        course_code: "CHEM 101",
                                        course_description: "General Chemistry I"
                                    },
                                    {
                                        course_code: "NSET 110",
                                        course_description: "Intro to Natural Sciences I"
                                    },
                                    {
                                        course_code: "NSET 111",
                                        course_description: "Environmental Science"
                                    },
                                    {
                                        course_code: "NSET 120",
                                        course_description: "General Biology I"
                                    },
                                    {
                                        course_code: "NSET 122",
                                        course_description: "The Science of Light"
                                    },
                                    {
                                        course_code: "NSET 130",
                                        course_description: "Owner’s Manual for Human Body"
                                    },
                                    {
                                        course_code: "NSET 131",
                                        course_description: "Impacts of Microbes and Infectious Diseases on History"
                                    },
                                    {
                                        course_code: "NSET 140",
                                        course_description: "Chemistry in Daily Life"
                                    },
                                    {
                                        course_code: "NSET 181",
                                        course_description: "Astronomy, Space, and Time"
                                    },
                                    {
                                        course_code: "NSET 182",
                                        course_description: "Are We Alone? The Search for Life in the Universe"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },

                            //Next Course starts heare
                            {
                                title: 'Investigate Mathematics',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "MATH 150",
                                        course_description: "The Mathematical Experience"
                                    },
                                    {
                                        course_code: "MATH 165",
                                        course_description: "Basic Algebra"
                                    },
                                    {
                                        course_code: "MATH 175",
                                        course_description: "Elementary Statistics"
                                    },
                                    {
                                        course_code: "MATH 180",
                                        course_description: "College Algebra"
                                    },
                                    {
                                        course_code: "MATH 181",
                                        course_description: "Pre-Calculus"
                                    },
                                    {
                                        course_code: "MATH 190",
                                        course_description: "Calculus 1"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },

                            //Next Course starts heare
                            {
                                title: 'Interpret Create Works',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "CINE 202",
                                        course_description: "Children’s Literature"
                                    },
                                    {
                                        course_code: "EDUC 252",
                                        course_description: "Children’s Literature"
                                    },
                                    {
                                        course_code: "ENGL 120",
                                        course_description: "Introduction to Literary Studies"
                                    },
                                    {
                                        course_code: "ENGL 250",
                                        course_description: "World Lit: Drama, Poetry, Epic"
                                    },
                                    {
                                        course_code: "ENGL 251",
                                        course_description: "World Lit: Novels"
                                    },
                                    {
                                        course_code: "EDUC 252",
                                        course_description: "The Art of Creative Nonfiction"
                                    },
                                    {
                                        course_code: "ENGL 253",
                                        course_description: "The Art of Poetry"
                                    },
                                    {
                                        course_code: "ENGL 254",
                                        course_description: "The Art of Short Story"
                                    },
                                    {
                                        course_code: "ENGL 255",
                                        course_description: "Theoretical Approaches to the Study of Literature"
                                    },
                                    {
                                        course_code: "JOUR 225",
                                        course_description: "Deconstructing the Story"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'Understand People 1',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "EDUC 220",
                                        course_description: "Family and Community Diversity"
                                    },
                                    {
                                        course_code: "EDUC 228",
                                        course_description: "Educational Psychology"
                                    },
                                    {
                                        course_code: "HIST 203",
                                        course_description: "History of the United States I"
                                    },
                                    {
                                        course_code: "HIST 204",
                                        course_description: "Foundations in Feminism: Women’s History"
                                    },
                                    {
                                        course_code: "HIST 206",
                                        course_description: "Foundations in Feminism: Women’s History"
                                    },

                                    {
                                        course_code: "HIST 220",
                                        course_description: "History of American Music"
                                    },
                                    {
                                        course_code: "POLS 102",
                                        course_description: "American National Government"
                                    },
                                    {
                                        course_code: "PSYC 150",
                                        course_description: "Psychological Foundations"
                                    },

                                    {
                                        course_code: "PSYC 203",
                                        course_description: "Theories of Personality"
                                    },
                                    {
                                        course_code: "PSYC 214",
                                        course_description: "Psychology of Emotion"
                                    },

                                    {
                                        course_code: "PSYC 230",
                                        course_description: " Marriage and the Family"
                                    },
                                    {
                                        course_code: "SOCW 105",
                                        course_description: "Sociological Foundations"
                                    },
                                    {
                                        course_code: "SOCW 240",
                                        course_description: "Anthropological Approaches"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'Understand People 2',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "EDUC 220",
                                        course_description: "Family and Community Diversity"
                                    },
                                    {
                                        course_code: "EDUC 228",
                                        course_description: "Educational Psychology"
                                    },
                                    {
                                        course_code: "HIST 203",
                                        course_description: "History of the United States I"
                                    },
                                    {
                                        course_code: "HIST 204",
                                        course_description: "Foundations in Feminism: Women’s History"
                                    },
                                    {
                                        course_code: "HIST 206",
                                        course_description: "Foundations in Feminism: Women’s History"
                                    },

                                    {
                                        course_code: "HIST 220",
                                        course_description: "History of American Music"
                                    },
                                    {
                                        course_code: "POLS 102",
                                        course_description: "American National Government"
                                    },
                                    {
                                        course_code: "PSYC 150",
                                        course_description: "Psychological Foundations"
                                    },

                                    {
                                        course_code: "PSYC 203",
                                        course_description: "Theories of Personality"
                                    },
                                    {
                                        course_code: "PSYC 214",
                                        course_description: "Psychology of Emotion"
                                    },

                                    {
                                        course_code: "PSYC 230",
                                        course_description: " Marriage and the Family"
                                    },
                                    {
                                        course_code: "SOCW 105",
                                        course_description: "Sociological Foundations"
                                    },
                                    {
                                        course_code: "SOCW 240",
                                        course_description: "Anthropological Approaches"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'Succend in Business',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "BMGT 204",
                                        course_description: "Salesmanship"
                                    },
                                    {
                                        course_code: "BMGT 205",
                                        course_description: "Principles of Marketing"
                                    },
                                    {
                                        course_code: "BMGT 234",
                                        course_description: "Ethical Leadership"
                                    },
                                    {
                                        course_code: "BMGT 271",
                                        course_description: "The Money Thing: Life and Finances During and After College"
                                    },
                                    {
                                        course_code: "CMPS 330",
                                        course_description: "Electronic Commerce"
                                    },
                                    {
                                        course_code: "ECON 202",
                                        course_description: "Principles of Microeconomics"
                                    },
                                    {
                                        course_code: "ECON 203",
                                        course_description: "Economic History of the U.S."
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'Appreciate & Apply the Arts',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "ART 100",
                                        course_description: "Family and Community Diversity"
                                    },
                                    {
                                        course_code: "EDUC 228",
                                        course_description: "Intro to Visual Arts"
                                    },
                                    {
                                        course_code: "CINE 170",
                                        course_description: "Introduction to Screenwriting for NonMajors"
                                    },
                                    {
                                        course_code: "COMM 290",
                                        course_description: "Seminar in Media Studies"
                                    },
                                    {
                                        course_code: "COPA 250",
                                        course_description: "Exploring the Arts"
                                    },
                                    {
                                        course_code: "COPA 252",
                                        course_description: "The Art of Creative Nonfiction"
                                    },
                                    {
                                        course_code: "COPA 253",
                                        course_description: "The Art of Poetry"
                                    },
                                    {
                                        course_code: "COPA 254",
                                        course_description: "The Art of Short Story"
                                    },
                                    {
                                        course_code: "EDUC 251",
                                        course_description: "Art and Music in Teaching"
                                    },
                                    {
                                        course_code: "ENGL 200",
                                        course_description: "Creative Writing"
                                    },
                                    {
                                        course_code: "PSYC 150",
                                        course_description: "Psychological Foundations"
                                    },
                                    {
                                        course_code: "MLNG 220",
                                        course_description: "French Literature in Translation"
                                    },
                                    {
                                        course_code: "MUS 101",
                                        course_description: "Music Appreciation"
                                    },
                                    {
                                        course_code: "PHOT 101",
                                        course_description: "Photography for Non-Majors"
                                    },
                                    {
                                        course_code: "THEA 111",
                                        course_description: "Introduction to Acting"
                                    },
                                    {
                                        course_code: "THEA 230",
                                        course_description: "Introduction to Theatrer"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'Discover Technology',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "CMPS 114",
                                        course_description: "Problem Solving with Info Tech"
                                    },
                                    {
                                        course_code: "EDUC 101",
                                        course_description: "Technological Literacy in Education for the 21st Century"
                                    },
                                    {
                                        course_code: "ETGR 205",
                                        course_description: "Engineering Technology Graphics"
                                    },
                                    {
                                        course_code: "JOUR 103",
                                        course_description: "Graphic Design I"
                                    },
                                    {
                                        course_code: "NSET 101",
                                        course_description: "Intro to Natural Sciences and Technology"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]

                            }
                        ]//end of table
                    },//ends div/subcategory
                    //new table/subcategory
                    {
                        title: 'Departmental Major Requirements (60 credits)', // <-- table begins/Table Title
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'MATH 175', // <-- Course Code
                                description: "Elementary Statistics",
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'MATH 180', // <-- Course Code
                                description: 'College Algebra (Investigate Math)',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'UNIV 101', // <-- Course Code
                                description: 'Psych. Foundations (Understand People)',
                                credits: '3.0',
                                completed: 'false',
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'PSYC 150', // <-- Course Code
                                description: 'Psych. Foundations (Understand People)',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'ACCT 101', // <-- Course Code
                                description: 'Introductory Accounting I',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'ACCT 102', // <-- Course Code
                                description: 'Introductory Accounting II',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 101', // <-- Course Code
                                description: 'Introduction to Business)',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 201', // <-- Course Code
                                description: 'Business Law I',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 202', // <-- Course Code
                                description: 'Business Law II',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 205', // <-- Course Code
                                description: 'Principals of Marketing',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 221', // <-- Course Code
                                description: 'Bus. Comm. and Research',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 300', // <-- Course Code
                                description: 'Corporate Finance',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 310', // <-- Course Code
                                description: 'Management Science',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'BMGT 417', // <-- Course Code
                                description: 'Strategic Planning',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 160', // <-- Course Code
                                description: 'Databases',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 161', // <-- Course Code
                                description: 'Network and Security',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 162', // <-- Course Code
                                description: 'Introduction to Programming',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 163', // <-- Course Code
                                description: 'Business Analytics',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 260', // <-- Course Code
                                description: 'Server Management',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 262', // <-- Course Code
                                description: 'Advanced Programming',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 480',
                                description: 'Senior Capstone',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//ends of table
                    },//ends table/subcategory

                    // New Table/subcategory
                    {
                        title: 'Departmental Elective Requirements (9 credits)', // <-- table
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'BMGT 380',
                                description: 'Cooperative Education I',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'BMGT 480',
                                description: 'Cooperative Education II',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 355',
                                description: 'Internship in Info Tech I',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 356',
                                description: 'Internship in Info Tech II',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 360',
                                description: 'Survey of Programming Languages',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 361',
                                description: 'Web Application Development',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 362',
                                description: 'Networking',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 363',
                                description: 'Digital Security',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 364',
                                description: 'NoSQL Databases',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 460',
                                description: 'Mobile Application Development',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 461',
                                description: 'Big Data Applications',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 462',
                                description: 'Data Mining',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'CMPS 463',
                                description: 'Entrepreneurship for Software Development',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'CMPS 464',
                                description: 'Software Development for E-Commerce',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//end of table
                    },//ends div/subcategory

                    //New Table/subcategory
                    {

                        title: 'General Elective Requirements (9 credits)', // <-- table
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'General Elective 1',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "",
                                        course_description: "General Elective"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            {
                                title: 'General Elective 2',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "",
                                        course_description: "General Elective"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'General Elective 3',
                                description: [
                                    //info for dropdown boxes
                                    {
                                        course_code: "",
                                        course_description: "General Elective"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//ends general Elective table
                    }//ends div/subcategory
                ]//End Undergraduate div
            }	//end variable	UndergraduateCatalog
        ] //end Undergraduate categories
    };

var MBACatalog =
    {
        title: "Master of Business Administration",
        value: "3",
        categories: [
            {
                title: "Information Technology MBA",
                value: "3",
                subcategories: [
                    //New Table
                    {
                        title: 'MBA Core Curriculum:', //  <-- table header
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'MBA 511',
                                description: 'Accounting for Managers',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 571',
                                description: 'Legal Environment of Business',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 572',
                                description: 'Marketing',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 573',
                                description: 'Corporate Finance',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 574',
                                description: 'Organizational Behaviors',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 576 or 540',
                                description: 'Quanitative Methods or Statistics and Quanitative Methods',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },

                            //Next Course Sarts here
                            {
                                title: 'MBA 578',
                                description: 'Managerial Economics',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//ends courses
                    },//ends table/subcategory

                    //New Table/subcategory
                    {
                        title: 'Business Analytics Track Concentration:', // <-- table header
                        courses: [ // <-- table
                            //Next Course starts heare
                            {
                                title: 'MBA 542',
                                description: 'Business Analytics',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 543',
                                description: 'Data Analysis and Visualization',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 544',
                                description: 'Applied Data Mining',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 595',
                                description: 'Corporate Finance',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//ends courses
                    },//ends table/subcategory

                    //New Table
                    {
                        title: 'Management Information Systems Track:', // <-- table
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'MBA 580',
                                description: 'Management Info. Systems',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 543',
                                description: 'Dev. of Support Networks',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course starts heare
                            {
                                title: 'MBA 582',
                                description: 'Dbase Mgmt. and Applications',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'MBA 597',
                                description: 'Special Topics Info. Systems',
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//ends courses
                    }//ends table/subcategory
                ]//Management Information Systems subcategory
            }//End MBA catalog array
        ] //end array
    };



var minorCatalog =
    {
        title: "Minor : Information Technology",
        value: "4",
        categories: [
            {
                title: "Information Technology Minor", // <-- New Div
                value: "4",
                subcategories: [ // <-- New Tables
                    //New Table
                    {
                        title: 'Choose 3 of the following:', //  <-- table header
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'Required courses - Choice 1',
                                description: [
                                    {
                                        course_code: "CMPS 160",
                                        course_description: "Databases"
                                    },
                                    {
                                        course_code: "CMPS 161",
                                        course_description: "Networking"
                                    },
                                    {
                                        course_code: "CMPS 162",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 163",
                                        course_description: "Business Analytics"
                                    },
                                    {
                                        course_code: "Text",
                                        course_description: "Text"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            {
                                title: 'Required courses - Choice 2',
                                description: [
                                    {
                                        course_code: "CMPS 160",
                                        course_description: "Databases"
                                    },
                                    {
                                        course_code: "CMPS 161",
                                        course_description: "Networking"
                                    },
                                    {
                                        course_code: "CMPS 162",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 163",
                                        course_description: "Business Analytics"
                                    },
                                    {
                                        course_code: "Text",
                                        course_description: "Text"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'Required courses - Choice 3',
                                description: [
                                    {
                                        course_code: "CMPS 160",
                                        course_description: "Databases"
                                    },
                                    {
                                        course_code: "CMPS 161",
                                        course_description: "Networking"
                                    },
                                    {
                                        course_code: "CMPS 162",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 163",
                                        course_description: "Business Analytics"
                                    },
                                    {
                                        course_code: "Text",
                                        course_description: "Text"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]
                    },
                    //New Table
                    {
                        title: 'Minor - Additional CMPS courses (9 Credits):', // <-- table
                        courses: [ // <-- rows
                            //Next Course starts heare
                            {
                                title: 'Additional courses - Choice 1',
                                description: [
                                    {
                                        course_code: "CMPS CMPS 260",
                                        course_description: "Data Structurese"
                                    },
                                    {
                                        course_code: "CMPS 261",
                                        course_description: "Server Management"
                                    },
                                    {
                                        course_code: "CMPS 162",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 163",
                                        course_description: "Business Analytics"
                                    },
                                    {
                                        course_code: "CMPS 262",
                                        course_description: "Advanced Programming"
                                    },
                                    {
                                        course_code: "CMPS 480",
                                        course_description: "Senior Capstone"
                                    },
                                    {
                                        course_code: "CMPS 355",
                                        course_description: "Internship in Info Tech I"
                                    },
                                    {
                                        course_code: "CMPS 356",
                                        course_description: "Internship in Info Tech II"
                                    },
                                    {
                                        course_code: "CMPS 360",
                                        course_description: "Survey of Programming Languages"
                                    },
                                    {
                                        course_code: "CMPS 361",
                                        course_description: "Web Application Development"
                                    },
                                    {
                                        course_code: "CMPS 362",
                                        course_description: "Networking"
                                    },
                                    {
                                        course_code: "CMPS 364",
                                        course_description: "NoSQL Databases"
                                    },
                                    {
                                        course_code: "CMPS 460",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 460",
                                        course_description: "Mobile Application Development"
                                    },
                                    {
                                        course_code: "CMPS 461",
                                        course_description: "Big Data Application"
                                    },
                                    {
                                        course_code: "CMPS 462",
                                        course_description: "Data Mining"
                                    },
                                    {
                                        course_code: "CMPS 463",
                                        course_description: "Software Development for E-Commerce"
                                    },
                                    {
                                        course_code: "CMPS 461",
                                        course_description: "Big Data Application"
                                    },
                                    {
                                        course_code: "TBD",
                                        course_description: "Special Topics/Independent Study"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            {
                                title: 'Additional courses - Choice 2',
                                description: [
                                    {
                                        course_code: "CMPS CMPS 260",
                                        course_description: "Data Structurese"
                                    },
                                    {
                                        course_code: "CMPS 261",
                                        course_description: "Server Management"
                                    },
                                    {
                                        course_code: "CMPS 162",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 163",
                                        course_description: "Business Analytics"
                                    },
                                    {
                                        course_code: "CMPS 262",
                                        course_description: "Advanced Programming"
                                    },
                                    {
                                        course_code: "CMPS 480",
                                        course_description: "Senior Capstone"
                                    },
                                    {
                                        course_code: "CMPS 355",
                                        course_description: "Internship in Info Tech I"
                                    },
                                    {
                                        course_code: "CMPS 356",
                                        course_description: "Internship in Info Tech II"
                                    },
                                    {
                                        course_code: "CMPS 360",
                                        course_description: "Survey of Programming Languages"
                                    },
                                    {
                                        course_code: "CMPS 361",
                                        course_description: "Web Application Development"
                                    },
                                    {
                                        course_code: "CMPS 362",
                                        course_description: "Networking"
                                    },
                                    {
                                        course_code: "CMPS 364",
                                        course_description: "NoSQL Databases"
                                    },
                                    {
                                        course_code: "CMPS 460",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 460",
                                        course_description: "Mobile Application Development"
                                    },
                                    {
                                        course_code: "CMPS 461",
                                        course_description: "Big Data Application"
                                    },
                                    {
                                        course_code: "CMPS 462",
                                        course_description: "Data Mining"
                                    },
                                    {
                                        course_code: "CMPS 463",
                                        course_description: "Software Development for E-Commerce"
                                    },
                                    {
                                        course_code: "CMPS 461",
                                        course_description: "Big Data Application"
                                    },
                                    {
                                        course_code: "TBD",
                                        course_description: "Special Topics/Independent Study"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            },
                            //Next Course Sarts here
                            {
                                title: 'Additional courses - Choice 3',
                                description: [
                                    {
                                        course_code: "CMPS CMPS 260",
                                        course_description: "Data Structurese"
                                    },
                                    {
                                        course_code: "CMPS 261",
                                        course_description: "Server Management"
                                    },
                                    {
                                        course_code: "CMPS 162",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 163",
                                        course_description: "Business Analytics"
                                    },
                                    {
                                        course_code: "CMPS 262",
                                        course_description: "Advanced Programming"
                                    },
                                    {
                                        course_code: "CMPS 480",
                                        course_description: "Senior Capstone"
                                    },
                                    {
                                        course_code: "CMPS 355",
                                        course_description: "Internship in Info Tech I"
                                    },
                                    {
                                        course_code: "CMPS 356",
                                        course_description: "Internship in Info Tech II"
                                    },
                                    {
                                        course_code: "CMPS 360",
                                        course_description: "Survey of Programming Languages"
                                    },
                                    {
                                        course_code: "CMPS 361",
                                        course_description: "Web Application Development"
                                    },
                                    {
                                        course_code: "CMPS 362",
                                        course_description: "Networking"
                                    },
                                    {
                                        course_code: "CMPS 364",
                                        course_description: "NoSQL Databases"
                                    },
                                    {
                                        course_code: "CMPS 460",
                                        course_description: "Intro to Programming"
                                    },
                                    {
                                        course_code: "CMPS 460",
                                        course_description: "Mobile Application Development"
                                    },
                                    {
                                        course_code: "CMPS 461",
                                        course_description: "Big Data Application"
                                    },
                                    {
                                        course_code: "CMPS 462",
                                        course_description: "Data Mining"
                                    },
                                    {
                                        course_code: "CMPS 463",
                                        course_description: "Software Development for E-Commerce"
                                    },
                                    {
                                        course_code: "CMPS 461",
                                        course_description: "Big Data Application"
                                    },
                                    {
                                        course_code: "TBD",
                                        course_description: "Special Topics/Independent Study"
                                    }
                                ],
                                credits: '3.0',
                                completed: false,
                                prerequisites: [],
                                Semester: ["FA"]
                            }
                        ]//ends courses
                    }//ends table/subcategory
                ]//end Minor div
            }//end
        ]//end variable
    };
