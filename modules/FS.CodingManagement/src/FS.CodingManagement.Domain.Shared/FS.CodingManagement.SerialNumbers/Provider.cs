using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CodingManagement.SerialNumbers
{
    public class Provider
    {
        public string Name { get; }
        public int Length { get; }

        protected Provider()
        {
        }

        public Provider(
            [NotNull] string name,
            [NotNull] int length
            )
        {
            Name = name;
            Length = length;
        }

    }
}
