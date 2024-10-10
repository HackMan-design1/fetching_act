import {
  
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
   
  
} from "@/components/ui/table"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((res) =>
        res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data.data)
  const user_data = data.data

  return (
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Nation</TableHead>
      <TableHead>Year</TableHead>
      <TableHead>Population</TableHead>
      <TableHead className="text-right">Slug.Nation</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      (user_data.map(data.Key))
      <TableCell className="font-medium">(data.Nation)</TableCell>
      <TableCell>(data.Nation)</TableCell>
      <TableCell>(data.Population)</TableCell>
      <TableCell className="text-right">(data.Nation)</TableCell>
    </TableRow>
  </TableBody>
</Table>




   
  )
}