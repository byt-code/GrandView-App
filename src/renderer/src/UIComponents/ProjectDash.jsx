import React, { useState, useEffect, createContext, useContext } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  Settings,
  LogOut,
  PlusCircle,
  Bell,
  Sun,
  Moon
} from 'lucide-react'

// Theme context
const ThemeContext = createContext()

// Custom hook for theme
const useTheme = () => {
  const [isDark, setIsDark] = useState(true)
  const [isGlassy, setIsGlassy] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  return { isDark, setIsDark, isGlassy, setIsGlassy }
}

// Theme provider component
const ThemeProvider = ({ children }) => {
  const theme = useTheme()
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
const useThemeContext = () => useContext(ThemeContext)

const SideNavItem = ({ icon, label, active, onClick }) => {
  const { isDark, isGlassy } = useThemeContext()
  return (
    <li
      className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 ${
        active
          ? `${isDark ? 'bg-teal-600' : 'bg-teal-500'} text-white`
          : `text-gray-400 hover:${isDark ? 'bg-gray-700' : 'bg-gray-200'}`
      } ${isGlassy ? 'backdrop-blur-md bg-opacity-30' : ''}`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </li>
  )
}

const ProjectCard = ({ title, progress, members }) => {
  const { isDark, isGlassy } = useThemeContext()
  return (
    <Card
      className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
      ${isGlassy ? 'backdrop-blur-md bg-opacity-30' : ''} transition-all duration-300`}
    >
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-gray-800'}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-2" />
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
          {progress}% Complete
        </p>
        <div className="flex -space-x-2">
          {members.map((member, index) => (
            <Avatar
              key={index}
              className={`border-2 ${isDark ? 'border-gray-800' : 'border-white'}`}
            >
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const TaskList = ({ tasks }) => {
  const { isDark, isGlassy } = useThemeContext()
  return (
    <Card
      className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
      ${isGlassy ? 'backdrop-blur-md bg-opacity-30' : ''} transition-all duration-300`}
    >
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-gray-800'}>Recent Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 rounded 
              ${isDark ? 'bg-gray-700' : 'bg-gray-100'} ${isGlassy ? 'backdrop-blur-md bg-opacity-30' : ''}`}
            >
              <span className={isDark ? 'text-white' : 'text-gray-800'}>{task.title}</span>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  task.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              >
                {task.status}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const TeamMember = ({ name, role, avatar }) => {
  const { isDark } = useThemeContext()
  return (
    <div
      className={`flex items-center p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}
    >
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{name}</h3>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{role}</p>
      </div>
    </div>
  )
}

const CalendarView = () => {
  const { isDark } = useThemeContext()
  return (
    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Calendar View
      </h2>
      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Calendar integration would go here. You can add a library like react-big-calendar for a full
        calendar view.
      </p>
    </div>
  )
}

const SettingsPanel = () => {
  const { isDark } = useThemeContext()
  return (
    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Settings
      </h2>
      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        Various settings options would go here. You can add toggles, input fields, and other UI
        elements for user preferences.
      </p>
    </div>
  )
}

const ProjectManagementDashboard = () => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard')
  const { isDark, setIsDark, isGlassy, setIsGlassy } = useThemeContext()

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Briefcase size={20} />, label: 'Projects' },
    { icon: <Users size={20} />, label: 'Team' },
    { icon: <Calendar size={20} />, label: 'Calendar' },
    { icon: <Settings size={20} />, label: 'Settings' }
  ]

  const projects = [
    {
      title: 'Website Redesign',
      progress: 75,
      members: [
        { name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3' }
      ]
    },
    {
      title: 'Mobile App Development',
      progress: 40,
      members: [
        { name: 'David', avatar: 'https://i.pravatar.cc/150?img=4' },
        { name: 'Eva', avatar: 'https://i.pravatar.cc/150?img=5' }
      ]
    },
    {
      title: 'Marketing Campaign',
      progress: 90,
      members: [
        { name: 'Frank', avatar: 'https://i.pravatar.cc/150?img=6' },
        { name: 'Grace', avatar: 'https://i.pravatar.cc/150?img=7' },
        { name: 'Henry', avatar: 'https://i.pravatar.cc/150?img=8' }
      ]
    }
  ]

  const tasks = [
    { title: 'Design homepage mockup', status: 'In Progress' },
    { title: 'Implement user authentication', status: 'Completed' },
    { title: 'Write content for blog posts', status: 'In Progress' },
    { title: 'Set up CI/CD pipeline', status: 'Completed' }
  ]

  const teamMembers = [
    { name: 'Alice Johnson', role: 'UX Designer', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob Smith', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Charlie Brown', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'David Lee', role: 'Project Manager', avatar: 'https://i.pravatar.cc/150?img=4' }
  ]

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <TaskList tasks={tasks} />
          </>
        )
      case 'Projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )
      case 'Team':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        )
      case 'Calendar':
        return <CalendarView />
      case 'Settings':
        return <SettingsPanel />
      default:
        return null
    }
  }

  return (
    <div
      className={`flex h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
    >
      {/* Side Navigation */}
      <nav
        className={`w-64 ${isDark ? 'bg-gray-800' : 'bg-white'} p-4 ${isGlassy ? 'backdrop-blur-md bg-opacity-30' : ''} transition-all duration-300`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl font-bold text-teal-500">ProjectHub</span>
          <div className="flex items-center space-x-2">
            <Switch
              checked={isDark}
              onCheckedChange={setIsDark}
              className="data-[state=checked]:bg-teal-600"
            />
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </div>
        </div>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <SideNavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeNavItem === item.label}
              onClick={() => setActiveNavItem(item.label)}
            />
          ))}
        </ul>
        <div className="absolute bottom-4 left-4">
          <SideNavItem
            icon={<LogOut size={20} />}
            label="Logout"
            onClick={() => console.log('Logout clicked')}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main
        className={`flex-1 p-8 overflow-auto ${isGlassy ? 'backdrop-blur-md bg-opacity-30' : ''}`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-teal-500">{activeNavItem}</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className={isDark ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'}
            >
              <PlusCircle size={20} className="mr-2" />
              New Project
            </Button>
            <Button
              variant="outline"
              className={isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}
            >
              <Bell size={20} />
            </Button>
            <Switch
              checked={isGlassy}
              onCheckedChange={setIsGlassy}
              className="data-[state=checked]:bg-teal-600"
            />
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=10" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {renderContent()}
      </main>
    </div>
  )
}

const App = () => (
  <ThemeProvider>
    <ProjectManagementDashboard />
  </ThemeProvider>
)

export default App
