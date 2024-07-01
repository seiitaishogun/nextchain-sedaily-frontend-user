import React from 'react';
import Layout from '@/app/(user)/components/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
