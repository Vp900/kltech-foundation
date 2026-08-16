import { Linkedin, Mail, Code2, Award, Sparkles } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  gradient: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sani-yadav",
    name: "Sani Yadav",
    role: "Founder & CEO",
    bio: "Visionary leader driving innovation, enterprise strategy, and technology expansion at KL Tech Solutions.",
    avatar: "/team/sani-yadav.png",
    skills: [],
    gradient: "from-blue-600 to-emerald-600",
  },
  {
    id: "anurag-yadav",
    name: "Anurag Yadav",
    role: "Co-Founder",
    bio: "Co-founder focusing on business growth, operational excellence, client strategy, and solution delivery.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    skills: [],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "mohit-verma",
    name: "Mohit Verma",
    role: "Chief Technology Officer (CTO)",
    bio: "Technology architect overseeing cloud infrastructure, security, microservices, and system scalability.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    skills: [],
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    id: "vikas-pal",
    name: "Vikas Pal",
    role: "Senior Full Stack Developer",
    bio: "Full stack engineer specializing in React, Next.js, Node.js, high-performance web apps, and API integrations.",
    avatar: "/team/vikas-pal.png",
    skills: [],
    gradient: "from-sky-600 to-cyan-600",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="container-page">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
            <Sparkles className="size-3.5" />
            <span>Our Leadership & Engineering Team</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Meet the Minds Behind KL Tech Solutions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Our passionate team of founders, architects, and senior engineers committed to turning ambitious software ideas into scalable real-world applications.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Top Accent Gradient Pill */}
              <div
                className={`absolute top-0 left-6 right-6 h-1.5 rounded-b-full bg-gradient-to-r ${member.gradient}`}
              />

              <div>
                {/* Avatar with status glow */}
                <div className="relative mb-5 mt-2 mx-auto size-28">
                  <div
                    className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr ${member.gradient} opacity-70 blur group-hover:opacity-100 transition-opacity`}
                  />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative size-28 rounded-full object-cover border-2 border-white dark:border-slate-900 shadow-md"
                  />
                  <div className="absolute bottom-1 right-1 grid size-7 place-items-center rounded-full bg-emerald-500 text-white shadow-md">
                    <Award className="size-4" />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                    {member.role}
                  </span>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
