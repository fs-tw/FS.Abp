using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Coding.SerialNumbers
{
    public class Provider
    {
        public string Name { get; }
        public int Length { get; }
        public Type GeneratorType { get; }

        protected Provider()
        {
        }

        public Provider(
            [NotNull] string name,
            [NotNull] int length,
            Type generatorType = null
            )
        {
            Name = name;
            Length = length;
            GeneratorType = generatorType ?? typeof(DefaultGenerator);
        }

    }
}
