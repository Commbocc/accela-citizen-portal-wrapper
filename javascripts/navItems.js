window.navItems = [
  {
    name: 'Home',
    icon: 'mdi-home',
    href: '/citizenaccess/Welcome.aspx?TabName=Home&TabList=Home',
  },
  {
    name: 'Search',
    icon: 'mdi-magnify',
    children: [
      {
        name: 'My Dashboard',
        href: '/citizenaccess/Dashboard.aspx?TabName=Home&TabList=Home',
      },
      {
        name: 'My Records',
        href: '/citizenaccess/Cap/MyRecordsCap.aspx?TabName=Home&TabList=Home',
      },
      {
        name: 'Property Information',
        href: '/citizenaccess/APO/APOLookup.aspx?TabName=APO',
      },
      {
        name: 'Building Applications',
        href:
          '/citizenaccess/Cap/CapHome.aspx?module=Building&TabName=Building',
      },
      {
        name: 'Fire Applications',
        href:
          '/citizenaccess/GeneralProperty/PropertyLookUp.aspx?isLicensee=Y&TabName=APO',
      },
      {
        name: 'License Information',
        href: '/citizenaccess/Cap/CapHome.aspx?module=Fire&TabName=Fire',
      },
    ],
  },
  {
    name: 'New',
    icon: 'mdi-plus',
    children: [
      {
        name: 'Building & Site Application',
        href:
          '/citizenaccess/Cap/CapApplyDisclaimer.aspx?module=Licenses&TabName=Licenses',
      },
      {
        name: 'Contractor License Application',
        href:
          '/citizenaccess/Cap/CapApplyDisclaimer.aspx?Module=Fire&TabName=Fire',
      },
      {
        name: 'Fire Application',
        href:
          '/citizenaccess/Cap/CapApplyDisclaimer.aspx?Module=Building&TabName=Building',
      },
    ],
  },
  {
    name: 'Request',
    icon: 'mdi-bell',
    children: [
      {
        name: 'Building Inspection',
        href:
          '/citizenaccess/Cap/CapHome.aspx?IsToShowInspection=yes&module=Building&TabName=Building',
      },
    ],
  },
]
