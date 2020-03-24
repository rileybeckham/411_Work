export const SurveyData = [
    {
        id: -1,
        type: -1,
        SurveyName: "Collaborative Learning Assesment"
    },
    {
        id: 0,
        type: 1,
        question: "I am a:",
        options:
            [
                'Learner',
                'Educator',
                'Administrator',
                'Community Member'
            ]
    },
    {
        id: 1,
        type: 1,
        question: 'I learn/work/volunteer or am most familiar with:',
        options:
            [
                'Elementary School',
                'Middle School',
                'High School',
                'Other'
            ],
       // userAnswer: 2
    },

    {
        id: 2,
        type: 2,
        question: 'Learner Experience:',
        options:
            [
                'BAU: Learn in large groups, mostly educator - led instruction',
                'Between BAU & LTT',
                'LTT: Learn in small groups with short presentations',
                'Between LTT & SOS',
                'SOS:Learn at own pace, hands-on'
            ],
      //  userAnswer: [2,3]        
    },
    {
        id: 3,
        type: 2,
        question: 'Special Education:',
        options:
            [
                'BAU: Isolated from peers',
                'Between BAU & LTT',
                'LTT: Inclusion model with limited trips to Resource Room',
                'Between LTT & SOS',
                'SOS:Full inclusion model, adults travel to meet student needs'
            ],
        //userAnswer:
        //    [
        //        0,1
        //    ]
    },
    {
        id: 4,
        type: 2,
        question: 'Individual Education Plan:',
        options:
            [
                'BAU: For Special Education only',
                'Between BAU & LTT',
                'LTT: For Special Education & Gifted',
                'Between LTT & SOS',
                'SOS:Individual Education Plans for All'
            ],
        userAnswer:
            [
                0,1
            ]
    },
    {
        id: 5,
        type: 2,
        question: 'Equity:',
        options:
            [
                'BAU: Equity is not identified or not addressed as a concern ',
                'Between BAU & LTT',
                'LTT: Equity is address by providing all learners with same resources and opportunities, not based on need',
                'Between LTT & SOS',
                'SOS:Equity is addressed by providing more resources for learners with greatest need or eliminating barrriers for all'
            ],
    },
    {
        id: 6,
        type: 2,
        question: '21st Century Skill:',
        options:
            [
                'BAU: 21st Century Skills of Creativity, Communication, Collaboration and Critical Thinking not present ',
                'Between BAU & LTT',
                'LTT: 21st Century Skills of Creativity, Communication, Collaboration and Critical Thinking integrated into core subjects',
                'Between LTT & SOS',
                'SOS:21st Century Skills of Creativity, Communication, Collaboration and Critical Thinking integrated into all learning'
            ],
    },
    {
        id: 7,
        type: 2,
        question: 'Grade Configuration: ',
        options:
            [
                'BAU: Based on building capacity ',
                'Between BAU & LTT',
                'LTT: Relationship based configurations',
                'Between LTT & SOS',
                'SOS:Multi-year, interest-based or independence level groupings'
            ],
    },
    {
        id: 8,
        type: 2,
        question: 'Project Based Learning: ',
        options:
            [
                'BAU: 1 day a month or Capstone Project in Year 12 ',
                'Between BAU & LTT',
                'LTT: 1 day a week ',
                'Between LTT & SOS',
                'SOS:Every day'
            ],
    },
    {
        id: 9,
        type: 2,
        question: 'Celebrating Learning: ',
        options:
            [
                'BAU: No attempt to make learning visible beyond art displays in elementary years ',
                'Between BAU & LTT',
                'LTT: Learner work routinely featured in all schools',
                'Between LTT & SOS',
                'SOS:Evidence of learner work in all areas on display throughout the school'
            ],
    },
    {
        id: 10,
        type: 2,
        question: 'Internships: ',
        options:
            [
                'BAU: No Internships ',
                'Between BAU & LTT',
                'LTT: Year 9-12 learners occasionally leave campus for job shadowing or unpaid/volunteer experiences',
                'Between LTT & SOS',
                'Year 9-12 learners leave campus for paid internships in areas of interest 1-2 x week, or work on site with co-located community partners (child care, senior care, fitness, cafe, maker space)'
            ],
    },
    {
        id: 11,
        type: 2,
        question: 'Assesments: ',
        options:
            [
                'BAU: Assessment standards mostly unknown to learner',
                'Between BAU & LTT',
                'LTT: Assessment standards known to all',
                'Between LTT & SOS',
                'SOS:Learners develop assessments of their own work'
            ],
    },
    {
        id: 12,
        type: 2,
        question: 'Advisors: ',
        options:
            [
                'BAU: Academic advising focus ',
                'Between BAU & LTT',
                'LTT: Advisor/Advisee program spanning multiple years of contact (K-5, 6-8, 9-12)',
                'Between LTT & SOS',
                'SOS:Includes Parent Home Visits, Trauma-Informed Care, Restorative Justice, etc.'
            ],
    },
    {
        id: 13,
        type: 2,
        question: 'Counselors: ',
        options:
            [
                'BAU: 1 for 400, mostly academic focus',
                'Between BAU & LTT',
                'LTT: 1 for 200, academic +social emotional',
                'Between LTT & SOS',
                'SOS: 1 for 100, mostly social emotional, include meditation, mindfulnes'
            ],
    },
    {
        id: 14,
        type: 2,
        question: 'Educator: ',
        options:
            [
                'BAU: Work Alone ',
                'Between BAU & LTT',
                'LTT: Teach with Partner ',
                'Between LTT & SOS',
                'SOS: Teacher Teams'
            ],
    },
    {
        id: 15,
        type: 2,
        question: 'Administration: ',
        options:
            [
                'BAU: Located for control & discipline ',
                'Between BAU & LTT',
                'LTT: Randomly located throughout, split between discipline/knowing learners ',
                'Between LTT & SOS',
                'SOS: Intentionally located throughout, focus on knowing learners'
            ],
    },
    {
        id: 16,
        type: 2,
        question: 'Safety: ',
        options:
            [
                'BAU: Safety addressed through lock down drills  ',
                'Between BAU & LTT',
                'LTT: Safety addressed through lock down drills enhanced with technology ',
                'Between LTT & SOS',
                'SOS:Safety addressed through relationships & zone security '
            ],
    },
    {
        id: 17,
        type: 2,
        question: 'Who controls the chalk/technology?',
        options:
            [
                'BAU: Educator  ',
                'Between BAU & LTT',
                'LTT: Educator+Learner ',
                'Between LTT & SOS',
                'SOS:Mostly Learner '
            ],
    },
    {
        id: 18,
        type: 2,
        question: 'Devices: ',
        options:
            [
                'BAU: 1:1 Devices ',
                'Between BAU & LTT',
                'LTT: 3 devices for each learner ',
                'Between LTT & SOS',
                'SOS:1 devices shared by 3 learners, or technology holidays '
            ],
    },
    {
        id: 19,
        type: 2,
        question: 'Computer: ',
        options:
            [
                'BAU: Scheduled lab ',
                'Between BAU & LTT',
                'LTT: In classroom ',
                'Between LTT & SOS',
                'SOS:Shared in extended learning area '
            ],
    },
    {
        id: 20,
        type: 2,
        question: 'Planning Time: ',
        options:
            [
                'BAU: Teachers plan alone ',
                'Between BAU & LTT',
                'LTT: Teachers assigned to teams that do not share learners ',
                'Between LTT & SOS',
                'SOS: Teachers create interdisciplinary, relationship-based teams '
            ],
    },
    {
        id: 21,
        type: 2,
        question: 'Daily Timetable: ',
        options:
            [
                'BAU: 45-50 minute classes ',
                'Between BAU & LTT',
                'LTT: Block Schedules ',
                'Between LTT & SOS',
                'SOS: Blended schedules with unscheduled days for learning at own pace '
            ],
    },
    {
        id: 22,
        type: 2,
        question: 'Weekly Schedule: ',
        options:
            [
                'BAU: Same every day ',
                'Between BAU & LTT',
                'LTT: Varied days to support occasional project based/deeper learning',
                'Between LTT & SOS',
                'SOS: Varied days to meet wide range of learning needs '
            ],
    },
    {
        id: 23,
        type: 2,
        question: 'Annual Calendar: ',
        options:
            [
                'BAU: Long summer break ',
                'Between BAU & LTT',
                'LTT: Long breaks used for enrichment or enhancement',
                'Between LTT & SOS',
                'SOS: No breaks longer than 2-3 weeks '
            ],
    },
    {
        id: 24,
        type: 2,
        question: 'Community Engagement: ',
        options:
            [
                'BAU: Limited to annual open house ',
                'Between BAU & LTT',
                'LTT: Routinely invited to celebrations of learning',
                'Between LTT & SOS',
                'SOS:Community experts integrated into learning experiences '
            ],
    },
    {
        id: 25,
        type: 2,
        question: 'Community Presence: ',
        options:
            [
                'BAU: Community boosters for arts and athletics ',
                'Between BAU & LTT',
                'LTT: Child care and health clinics on campus',
                'Between LTT & SOS',
                'SOS: Co-located community partners- child care, senior care, health clinics, fitness center, library, cafe, credit unions, maker space, etc.'
            ],
    },
    {
        id: 26,
        type: 2,
        question: 'Food: ',
        options:
            [
                'BAU: Off the truck ',
                'Between BAU & LTT',
                'LTT: Local food occasionally integrated into menu',
                'Between LTT & SOS',
                'SOS: Students grow, prepare and serve food'
            ],
    }
];
