import { Container, Text, VStack, Box, Heading, Flex } from "@chakra-ui/react";
import { FaTrafficLight, FaChartLine, FaInfoCircle } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', traffic: 4000, detailed: 2400, insights: 2400 },
  { name: 'Feb', traffic: 3000, detailed: 1398, insights: 2210 },
  { name: 'Mar', traffic: 2000, detailed: 9800, insights: 2290 },
  { name: 'Apr', traffic: 2780, detailed: 3908, insights: 2000 },
  { name: 'May', traffic: 1890, detailed: 4800, insights: 2181 },
  { name: 'Jun', traffic: 2390, detailed: 3800, insights: 2500 },
  { name: 'Jul', traffic: 3490, detailed: 4300, insights: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" w="100%" p={4} bg="blue.500" color="white" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Traffic Analysis Dashboard</Heading>
        <FaTrafficLight size="24px" />
      </Flex>

      <VStack spacing={8} mt={8}>
        <Box w="100%" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Overview</Heading>
          <LineChart width={600} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="traffic" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Box>

        <Box w="100%" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Detailed Analysis</Heading>
          <BarChart width={600} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="detailed" fill="#82ca9d" />
          </BarChart>
        </Box>

        <Box w="100%" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Insights</Heading>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="insights"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>
      </VStack>

      <Flex as="footer" w="100%" p={4} bg="blue.500" color="white" justifyContent="center" alignItems="center" mt={8}>
        <FaInfoCircle size="24px" />
        <Text ml={2}>Traffic Analysis Dashboard © 2023</Text>
      </Flex>
    </Container>
  );
};

export default Index;